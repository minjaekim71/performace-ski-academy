import './Footer.css';

function Footer() {
    return (
        <div className="footer">
            <table className="table">
                <tbody>
                    <tr>
                        <th colspan="3">Performance Ski Academy</th>
                    </tr>
                    <th className="header" rowspan="2">Phone Number</th>
                    <tr>
                        <tr>010-6750-1351</tr>
                        <tr>010-7468-1355</tr>
                    </tr>
                    <th className="header" rowsapn="4">Information</th>
                    <td>
                        <tr><td className="subheader">Name </td></tr>
                        <tr><td className="subheader">President </td></tr>
                        <tr><td className="subheader">Business Number</td></tr>
                        <tr><td className="subheader">Email</td></tr>
                    </td>
                    <td >
                        <tr>Performance</tr>
                        <tr>WooChang-Jung</tr>
                        <tr>436-37-00734</tr>
                        <tr>performance_ski@naver.com</tr>
                    </td>
                </tbody>
            </table>
        </div>
    );
}

export default Footer;
