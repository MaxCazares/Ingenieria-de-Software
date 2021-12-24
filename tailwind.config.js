// Para compilar los nuevos estilos ejecuta el comando "npm run build:css"
// Para dejar los estilos para producción ejecuta el comando "npm run build"

module.exports = {
    purge: [
        './public/**/*.ejs',
    ],
    darkmode: false,
    theme: {
        extend: {}
        // screens: {
        //     sm: '240px',
        //     md: '468px',
        //     lg: '624px',
        //     xl: '880px',
        // },
    },
    variants: {
        extend: {}
    },
    plugins: [
        require('@tailwindcss/forms'),
    ]
}