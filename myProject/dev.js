module.exports = {
    'configuration': {
        evironment: 'dev',
        application_name: 'development',
        angular_directory: '/www',
        cookie: {
            maxAge: 1000 * 60 * 60
        }
    },
    'development': {
        'nodejs': {
            ip_nodejs: '127.0.0.1',
            port_nodejs: 5000,
            // dns_nodejs: '',
            // dns_present: true,
            https: true
        },
        'backend': {
            ip_nodejs: '127.0.0.1',
            port_nodejs: 5000,
            // dns_nodejs: '',
            // dns_present: true,
            https: true
        }
    }
}