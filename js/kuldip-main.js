/*------------------------------------------------------------------
                          Menu
-------------------------------------------------------------------*/

function toogle_visibility(tab_id, id) {
    let Tab_ID = document.querySelector(tab_id);
    let ID = document.querySelector(id);

    let home_tab = document.querySelector('#v-pills-home-tab');
    let profile_tab = document.querySelector('#v-pills-profile-tab');
    let messages_tab = document.querySelector('#v-pills-messages-tab');
    let settings_tab = document.querySelector('#v-pills-settings-tab');

    let home = document.querySelector('#v-pills-home');
    let profile = document.querySelector('#v-pills-profile');
    let messages = document.querySelector('#v-pills-messages');
    let settings = document.querySelector('#v-pills-settings');

    home_tab.classList.remove("active");
    profile_tab.classList.remove("active");
    messages_tab.classList.remove("active");
    settings_tab.classList.remove("active");

    home.classList.remove("show", "active");
    profile.classList.remove("show", "active");
    messages.classList.remove("show", "active");
    settings.classList.remove("show", "active");

    if (id == '#v-pills-home') {

        Tab_ID.classList.add("active");
        ID.classList.add("show", "active");

    } else if (id == '#v-pills-profile') {

        Tab_ID.classList.add("active");
        ID.classList.add("show", "active");

    } else if (id == '#v-pills-messages') {

        Tab_ID.classList.add("active");
        ID.classList.add("show", "active");

    } else {

        Tab_ID.classList.add("active");
        ID.classList.add("show", "active");

    }
}