
import { routesMap } from "./Routes"


export const getMenuList = (handleContactForm)=> [
    {
        name: 'Capabilities',
        subMenu: [
            {
                subName: 'Products',
                items: [
                    { name: 'Credit Sentinel', url: routesMap.CustomerService  },
                    { name: 'Bid Comply', url:  routesMap.ContractLifecycle },
                    { name: 'TaqCompare', url: routesMap.EmployeesEngagement  },
                    { name: 'Digital Product Passport', url: routesMap.DigitalProducts  },
                ],
            },
            {
                subName: 'Services',
                items: [
                    { name: 'Agentic AI & Intelligent Apps', url: routesMap.AgenticAI  },
                    { name: 'Data & Analytics', url: routesMap.DataAnalytics  },
                    { name: 'Blockchain & Digital Assets', url: routesMap.BlockchainDigitalAssets  },
                    { name: 'AI: Strategy & Governance', url: routesMap.AiStrategyGovernance  },
                    { name: 'Data: Strategy & Governance', url: routesMap.DataStrategyGovernance  },
                    { name: 'Digital Assets: Business & Operational Strategy', url: routesMap.DigitalAssets  },
                ]
            },
        ]
    },
    {
        name: 'Solutions',
        subMenu: [
            {
                subName: '',
                items: [
                    { name: 'Banking', url: routesMap.Bank  },
                    { name: 'Government', url: routesMap.Government },
                    { name: 'FMCG', url: routesMap.Fmcg },
                    { name: 'Manufacturing', url: routesMap.Manufacturing  },
                    { name: 'Retail', url:  routesMap.Retail },
                    { name: 'Oil & Gas', url: routesMap.OilGas  },
                    { name: 'Healthcare', url: routesMap.Healthcare },
                    { name: 'Real Estate', url: routesMap.RealEstate },
                    { name: 'Aviation', url: routesMap.Aviation },
                    { name: 'Supply Chain & Logistics', url: routesMap.SupplyChainLogistics  },
                ],
            },
        ]
    },
    {
        name: 'About',
        url: '/about'

    },
     {
        name: 'Message from the CEO',
        url: '/message-from-ceo'

    },
    {
        name: 'Careers',
        url: '/career'

    }, {
        name: 'Contact',
        action:  handleContactForm


    },
]
