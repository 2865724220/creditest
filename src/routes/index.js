//Home组件
import Home from "@pages/home";

// addcard
import addcard from "@pages/addcard/router";
// progress
import progress from "@pages/progress/router";

// strategy
import strategy from "@pages/strategy/router";
// info
import myfollow from "@pages/myfollow/router";

import cardList from "@pages/cardList/router";

import creditCardList from "@pages/creditCardList/router";

import cityLocation from "@pages/cityLocation/router";

import insteadBack from "@pages/insteadBack/router";

import creditCardDetail from "@pages/creditCardDetail/router";

// test
import testDemo from "@pages/testdemo/router";

const routes = [{
    path: '/',
    name: 'home',
    component: Home,
    children: [
        addcard,
        progress
    ]
},

strategy,
myfollow,
cardList,
creditCardList,
cityLocation,
insteadBack,
creditCardDetail,
{ path: '*', redirect: '/' }
];

if (__DEV__) {
    routes.splice(routes.length - 1, 0, {
        path: '/testdemo',
        name: 'testdemo',
        component: testDemo
    });
}

export default routes;
