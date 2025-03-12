
//all , breakfast, lunch, shakes, dinner


const fnc_make_menu = (menu_object) => {
    const menu_info_html = `<div class="menu-info">
                    <div class="menu-info__box__img">
                        <img class="menu__info__img" src="${menu_object.menu_img_src}">
                    </div>
                    <div class="menu-info__box__description">
                        <div class="info__description__title">
                            <div class="description__title__name">${menu_object.menu_name}</div>
                            <div class="description__title__price">${menu_object.menu_price}원</div>
                        </div>
                        <div class="info-description-context">${menu_object.menu_context}</div>
                    </div>
                </div>`
    const menu_info_list = document.querySelector("div.middle__contents__menu-info-list");
    const new_menu_info = document.createElement("div");
    new_menu_info.innerHTML = menu_info_html;
    menu_info_list.appendChild(new_menu_info);
}
const fnc_make_menu_api = (menu_img_src,menu_name,menu_price,menu_context ) => {
    return {menu_img_src:menu_img_src,menu_name: menu_name, menu_price: menu_price, menu_context: menu_context};
}
const new_menu = fnc_make_menu_api("", "New Menu", 10000, "New Menu Description");
fnc_make_menu(new_menu);

const fnc_make_menu_btn = (txt_id, txt_inner_text) => {
    const buttons = document.querySelector("div.header__buttons");
    const new_button = document.createElement("button");
    new_button.id = txt_id;
    new_button.className = "header__button";
    new_button.innerText = txt_inner_text;
    console.log(new_button.id);
    new_button.addEventListener("click",function() {fnc_btn_event_listener(new_button.id)});
    buttons.appendChild(new_button);
}
const MENU_NAMES = ["all", "breakfast", "lunch", "shakes", "dinner"];

let breakfast_menus =[
    fnc_make_menu_api("", "New Menu1", 10000, "New Menu Description1"),
    fnc_make_menu_api("", "New Menu2", 12000, "New Menu Description2"),
    fnc_make_menu_api("", "New Menu3", 13000, "New Menu Description3"),
]
let lunch_menus =[
    fnc_make_menu_api("", "New Menu1", 10000, "New Menu Description1"),
    fnc_make_menu_api("", "New Menu2", 12000, "New Menu Description2"),
    fnc_make_menu_api("", "New Menu3", 13000, "New Menu Description3"),
]
let shakes_menus =[
    fnc_make_menu_api("", "New Menu1", 10000, "New Menu Description1"),
]
let dinner_menus =[
    fnc_make_menu_api("", "New Menu1", 10000, "New Menu Description1"),
    fnc_make_menu_api("", "New Menu2", 12000, "New Menu Description2"),
]

const menu_list = {
    breakfast: breakfast_menus,
    lunch: lunch_menus,
    shakes: shakes_menus,
    dinner: dinner_menus
}
console.log(menu_list);
const fnc_btn_event_listener = (menu_type) => {
    let now_menu_list = [];
    const menu_info_list = document.querySelector("div.middle__contents__menu-info-list");
    while (menu_info_list.firstChild) {
        menu_info_list.removeChild(menu_info_list.firstChild);
    }
    if(menu_type === "all"){
        now_menu_list = Object.values(menu_list).flat();
    }
    else{
        now_menu_list = menu_list[menu_type];
    }
    console.log(now_menu_list);
    now_menu_list.forEach(menu => {
        fnc_make_menu(menu);
    });

}

fnc_make_menu_btn("breakfast", "Breakfast");
fnc_make_menu_btn("lunch", "Lunch");
fnc_make_menu_btn("shakes", "Shakes");
fnc_make_menu_btn("dinner", "Dinner");