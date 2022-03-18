const test = require('ava')
    , remote = require('./')
    , nock = require('nock')

test('should fail on invalid url', async t => {
    try {
        await remote('blah')
    } catch (err) {
        t.is(err.message, 'Invalid URI "blah"')
    }
})

test('should fail on invalid url with async', async t => {
    const error = await t.throwsAsync(remote('blah'), { instanceOf: Error, message: 'Invalid URI "blah"' });
    t.is(error.message, 'Invalid URI "blah"');
})

test('should fail on 404', async t => {
    const error = await t.throwsAsync(remote('https://peakdevs.com/muhamed-resume.pdff'), {
        instanceOf: Error,
        message   : 'Received invalid status code: 404'
    });
    t.is(error.message, 'Received invalid status code: 404');
})

test('should return size on success', async t => {
    const url = 'https://peakdevs.com/muhamed-resume.pdf'
    await t.notThrowsAsync(remote(url));
    const out = await remote(url)
    t.is(out, 218884);
})

test('should work passing an object', async t => {
    const opts = {
        uri: 'https://peakdevs.com/muhamed-resume.pdf'
    }
    await t.notThrowsAsync(remote(opts));
    const out = await remote(opts)
    t.is(out, 218884);
})

test('should return error if invalid content-length', async t => {
    nock('http://example.com')
        .head('/users')
        .reply(200);

    const error = await t.throwsAsync(remote(`http://example.com/users`), {
        instanceOf: Error,
        message   : 'Unable to determine file size'
    });
    t.is(error.message, 'Unable to determine file size');
})
