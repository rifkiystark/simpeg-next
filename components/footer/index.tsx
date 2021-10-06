import Script from 'next/script'

const Footer = () => {
    return (
        <>
            <Script src="static/tabler/dist/js/tabler.min.js"></Script>
            <Script src="https://code.jquery.com/jquery-3.5.1.js"></Script>
            <Script src="https://cdn.datatables.net/1.10.24/js/jquery.dataTables.min.js"></Script>
            <Script src="https://cdn.datatables.net/buttons/1.7.0/js/dataTables.buttons.min.js"></Script>
            <Script src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.1.3/jszip.min.js"></Script>
            <Script src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.53/pdfmake.min.js"></Script>
            <Script src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.53/vfs_fonts.js"></Script>
            <Script src="https://cdn.datatables.net/buttons/1.7.0/js/buttons.html5.min.js"></Script>
            <Script src="https://cdn.datatables.net/buttons/1.7.0/js/buttons.print.min.js"></Script>
        </>
    )
}

export default Footer;