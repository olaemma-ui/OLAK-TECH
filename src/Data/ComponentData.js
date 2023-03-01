import blog1 from "../asset/img/blog/blog-1.jpg";
import blog2 from "../asset/img/blog/blog-2.jpg";
import blog3 from "../asset/img/blog/blog-3.jpg";
import blog4 from "../asset/img/blog/blog-4.jpg";
import blog5 from "../asset/img/blog/blog-5.jpg";
import blog6 from "../asset/img/blog/blog-6.jpg";

var services = [
    {
        'title': 'Web Development',
        'icon': 'fa-code',
        'summary': 'Website & Web Application Development',
        'link':'',
        'content': [
            'Website Design',
            'Web Application ',
            'Website Service (API)',
        ]
    },

    {
        'title': 'Mobile Application Development',
        'icon': 'fa-mobile-alt',
        'summary': 'Android & IOS Application Development',
        'link':'',
        'content': [
            'Android Application',
            'IOS Application',
        ]
    },

    {
        'title': 'Desktop Application Development',
        'icon': 'fa-desktop-alt',
        'summary': 'Cross Platform Desktop Application',
        'link':'',
        'content': [
            'Windows OS',
            'Linux OS',
            'MAC OS',
        ]
    },

    {
        'title': 'Data Analysis',
        'icon': 'fa-analytics',
        'summary': 'Data analysis with python and .....',
        'link':'',
        'content': [
            '--- --- --- ---',
            '--- --- --- ---',
            '--- --- --- ---',
        ]
    },
    
    {
        'title': 'It Consultation',
        'icon': 'fa-question',
        'summary': '----- ----- ------',
        'link':'',
        'content': [
            '--- --- --- ---',
            '--- --- --- ---',
            '--- --- --- ---',
        ]
    },

    {
        'title': 'Code Hamlet',
        'icon': 'fa-graduation-cap',
        'summary': 'SIWES & Internship Program (WEB, MOBILE, DESKTOP & PYTHON)',
        'link':'/codehamlet',
        'content': [
            '3 months paid internship',
            '3 months SIWES (Student Industrial Working Experience Scheme)',
            'Learn Softare Development',
        ]
    }
];

var skills = [
    {
        'title': 'Web Design',
        'name': 'Frontend Development',
        'content': `Learning the basics of web designing is a great start, gives you a better insight of the industry requirement.`,
        'img': blog1
    },

    {
        'title': 'Web Development',
        'name': 'Backend Development',
        'content': `Web development (Backend) is 1 of the most highly demand skill in the industry.`,
        'img': blog2
    },

    {
        'title': 'Desktop Development',
        'name': 'Desktop Application Development',
        'content': `Learn to build desktop application, Most organizations needs desktop application to perform some complex task.`,
        'img': blog3
    },
    
    {
        'title': 'Mobile Development',
        'name': 'Mobile Application Development',
        'content': `Mobile app development is 1 one of the most highly demand skills in the industry today.`,
        'img': blog4
    },

    {
        'title': 'Product Design (UI/UX)',
        'name': 'UI / UX Design',
        'content': `Learn to understand user needs and present a 
                    simple to use design of the product before development.`,
        'img': blog5
    },


    {
        'title': 'Data Analysis',
        'name': 'Python Data Analysis',
        'content': `We offer data analysis with python, where python makes it easier to analyze your data.`,
        'img': blog6
    },
]

var contacts = [
    {
        'href':'tel+',
        'title':'Phone Number',
        'content':'(+234) 810 1995 824',
        'icon': 'fa-phone'

    },

    {
        'href':'mail',
        'title':'Email Address',
        'content':'olaktech@gmail.com',
        'icon': 'fa-envelope'
    },
    {
        'href':'mail',
        'title':'Email Address',
        'content': `N0 10 ICT odunjo street, off Onikoko Adigbe panseke Abeokuta Ogun State Nigeria. `,
        'icon': 'fa-map-marker-alt'
    }
];

var navLinks = [
    {'title':'Home', 'link': '', 'id': 'home'},
    {'title':'About', 'link': 'about', 'id': ''},
    {'title':'Services', 'link': '', 'id': 'services'},
    {'title':'Contact', 'link': 'contact', 'id': 'contact'},
    {'title':'Projects', 'link': '', 'id': 'projects'},
];

var aboutService = [

    {
        'title': 'Data Analysis',
        'icon': 'fa-analytics',
        'content': 'Data analysis with python'
    },

    {
        'title': 'IT Consultant',
        'icon': 'fa-question',
        'content': 'Data analysis with python'
    },

];

var projects = [
    {
        'title': 'Project 1 Title',
        'about': 'A town hall different from bala blu, blue blu bulaba. broom broom ......',
        'link': 'https://.........',
        'img': blog1
    },

    {
        'title': 'Project 2 Title',
        'about': 'A town hall different from bala blu, blue blu bulaba. broom broom ......',
        'link': 'https://.........',
        'img': blog2
    },

    {
        'title': 'Project 3 Title',
        'about': 'A town hall different from bala blu, blue blu bulaba. broom broom ......',
        'link': 'https://.........',
        'img': blog3
    },

    {
        'title': 'Project 4 Title',
        'about': 'A town hall different from bala blu, blue blu bulaba. broom broom ......',
        'link': 'https://.........',
        'img': blog4
    },

    {
        'title': 'Projec 5 Title',
        'about': 'A town hall different from bala blu, blue blu bulaba. broom broom ......',
        'link': 'https://.........',
        'img': blog5
    },

    {
        'title': 'Projec 6 Title',
        'about': 'A town hall different from bala blu, blue blu bulaba. broom broom ......',
        'link': 'https://.........',
        'img': blog6
    }
]
export {services, contacts, navLinks, aboutService, projects, skills};