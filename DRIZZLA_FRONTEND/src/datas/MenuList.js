
export const getMenuList = (handleContactForm)=> [
    {
        name: 'Capabilities',
        subMenu: [
            {
                subName: 'Products',
                items: [
                    { name: 'Customer service AI co-pilot', url: '/customer-service' },
                    { name: 'Contract lifecycle AI co-pilot', url: '/contract-lifecycle' },
                    { name: 'Employee engagement AI agent', url: '/employees-engagement' },
                    { name: 'Digital product passport', url: '/digital-products' },
                ],
            },
            {
                subName: 'Services',
                items: [
                    { name: 'Agentic AI & Intelligent Apps', url: '/agentic-ai' },
                    { name: 'Data & Analytics', url: '/data-analytics' },
                    { name: 'Blockchain & Digital Assets', url: '/block-chain-digital-assets' },
                    { name: 'AI: Strategy & Governance', url: '/ai-strategy-governance' },
                    { name: 'Data: Strategy & Governance', url: '/data-strategy-governance' },
                    { name: 'Digital Assets: Business & Operational Strategy', url: '/data-assets-business-and-operational-strategy' },
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
                    { name: 'Banking', url: '/banking-service' },
                    { name: 'Government', url: '/government-service' },
                    { name: 'FMCG', url: '/fmcg-service' },
                    { name: 'Manufacturing', url: '/manufacturing-service' },
                    { name: 'Retail', url: '/retail-service' },
                    { name: 'Oil & Gas', url: '/oil-gas-service' },
                    { name: 'Healthcare', url: '/healthcare-service' },
                    { name: 'Real Estate', url: '/real-estate-service' },
                    { name: 'Aviation', url: '/aviation-service' },
                    { name: 'Supply Chain & Logistics', url: '/supply-logistics-service' },
                ],
            },
        ]
    },
    {
        name: 'About',
        url: '/about'

    },
    {
        name: 'Careers',
        url: '/career'

    }, {
        name: 'Contact',
        action:  handleContactForm


    },
]
