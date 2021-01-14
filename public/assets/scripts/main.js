$(document).ready(() => {
    $("#burger_submit").on("click", e => {
        let name = $("#enter-burger").val()
        e.preventDefault()
        $.post("/burgers", {
            burger_name: name
        }).done(res => {})
    })
    $(".update-button").on("click", e => {
        e.preventDefault();
        let id = $(e.target).data("id");
        $.ajax({
            method: "PUT",
            url: `/burgers/${id}`
        }).done(res => {
            location.reload();
        })
    })
})