$(document).ready(function() {
    const markThatShit = () => {
        $('#preview').html(marked($('#editor').val(),
        {
            breaks: true,
            gfm: true
        }))
    }
    markThatShit()
    $('#editor').keyup(() => {
        markThatShit()
    })
})