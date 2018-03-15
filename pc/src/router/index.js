import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/index/index.vue'
import IndexPage from '@/components/index/indexPage/indexPage.vue'
import HelpCenter from '@/components/helpCenter/helpCenter.vue'
import AboutUs from '@/components/aboutUs/aboutUs.vue'
import AboutusIndex from '@/components/aboutUs/aboutusIndex.vue'
import Partner from '@/components/aboutUs/partner.vue'
import Notice from '@/components/aboutUs/notice.vue'
import NoticeDetail from '@/components/aboutUs/noticeDetail.vue'
import LegalAdviser from '@/components/aboutUs/legalAdviser.vue'
import MediaCoverage from '@/components/aboutUs/mediaCoverage.vue'
import JoinUs from '@/components/aboutUs/joinUs.vue'
import contactUs from '@/components/aboutUs/contactUs.vue'
import InfoDisclosure from '@/components/infoDisclosure/infoDisclosure'
import CompanyInfo from '@/components/infoDisclosure/companyInfo/companyInfo'
import DataDisplay from '@/components/infoDisclosure/dataDisplay/dataDisplay'
import Policy from '@/components/infoDisclosure/policy/policy'
import Major from '@/components/infoDisclosure/major/major'
import RegisterPro from '@/components/registerPro/registerPro'
import Login from '@/components/user/login/login.vue'
import Register from '@/components/user/register/register.vue'
import registerSuc from '@/components/user/register/registerSuc.vue'
import PlanList from '@/components/plan/planList/planList.vue'
import planDetail from '@/components/plan/planDetail/planDetail.vue'
Vue.use(Router)
let routes = [{
        path: '/',
        name: 'parent',
        component: Index,
        redirect: '/index',
        children: [{
            path: '/index',
            component: IndexPage
        }]
    },
    {
        path: '/helpCenter',
        name: 'helpcenter',
        component: HelpCenter
    },
    {
        path: '/aboutUs',
        name: 'aboutus',
        component: AboutUs,
        children: [{
                path: "/aboutusIndex",
                component: AboutusIndex
            },
            {
                path: "/partner",
                component: Partner
            },
            {
                path: "/notice",
                component: Notice
            },
            {
                path: "/noticeDetail",
                component: NoticeDetail
            },
            {
                path: "/joinUs",
                component: JoinUs
            },
            {
                path: "/legalAdviser",
                component: LegalAdviser
            },
            {
                path: "/mediaCoverage",
                component: MediaCoverage
            },
            {
                path: "/contactus",
                component: contactUs
            },
            // 重定向
            {
                path: '',
                redirect: '/aboutusIndex'
            }
        ]
    },
    {
        path: "/infoDisclosure",
        component: InfoDisclosure,
        children: [{
                path: "/infoDisclosure/companyInfo",
                component: CompanyInfo
            },
            {
                path: "/infoDisclosure/dataDisplay",
                component: DataDisplay
            },
            {
                path: "/infoDisclosure/policy",
                component: Policy
            },
            {
                path: "/infoDisclosure/major",
                component: Major
            },
            // 重定向
            {
                path: '',
                redirect: '/infoDisclosure/companyInfo'
            }
        ]
    },
    {
        path: '/registerPro',
        component: RegisterPro
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/register',
        name: 'register',
        component: Register
    },
    {
        path: '/registerSuc',
        name: 'registerSuc',
        component: registerSuc
    },
    {
        path: '/planList',
        name: 'planList',
        component: PlanList
    },
    {
        path: '/planDetail',
        name: 'planDetail',
        component: planDetail
    }
]
let router = new Router({
    mode: 'history',
    routes
})
export default router