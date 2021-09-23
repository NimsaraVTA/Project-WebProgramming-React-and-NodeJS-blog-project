import './showcon.css';
import Sidebar from '../sidebar/Sidebar';
import { Link } from 'react-router-dom';


export default function Showcon() {

    return (

        <>
            <div className="showcon">

                <div className="conTable">
                    <h1 className="conTitle">Show Contacts</h1>
                    <br/>
                    <div style={{ overflowX: "auto" }}>
                        <table>
                            <tr>
                                <th>Name</th>
                                <th>Contact No</th>
                                <th>Country</th>
                                <th>Subject</th>
                                <th>Edit</th>
                                <th>Delete</th>
                                
                               
                            </tr>
                            <tr>
                                <td>Jill</td>
                                <td>xxxxxxxxxx</td>
                                <td>Sri Lanka</td>
                                <td>Something</td>
                                <td><Link to="/delete">Edit</Link></td>
                                <td style={{ cursor:"pointer" }}>Delete</td>
                                
                            </tr>
                            <tr>
                                <td>Eve</td>
                                <td>xxxxxxxxxx</td>
                                <td>USA</td>
                                <td>Something</td>
                                <td><Link to="/delete">Edit</Link></td>
                                <td style={{ cursor: "pointer" }}>Delete</td>
                                
                            </tr>
                            <tr>
                                <td>Adam</td>
                                <td>xxxxxxxxxx</td>
                                <td>UK</td>
                                <td>Something</td>
                                <td><Link to="/delete">Edit</Link></td>
                                <td style={{ cursor: "pointer" }}>Delete</td>
                                
                            </tr>
                            <tr>
                                <td>Jill</td>
                                <td>xxxxxxxxxx</td>
                                <td>Sri Lanka</td>
                                <td>Something</td>
                                <td><Link to="/delete">Edit</Link></td>
                                <td style={{ cursor: "pointer" }}>Delete</td>

                            </tr>
                            <tr>
                                <td>Eve</td>
                                <td>xxxxxxxxxx</td>
                                <td>USA</td>
                                <td>Something</td>
                                <td><Link to="/delete">Edit</Link></td>
                                <td style={{ cursor: "pointer" }}>Delete</td>

                            </tr>
                            <tr>
                                <td>Adam</td>
                                <td>xxxxxxxxxx</td>
                                <td>UK</td>
                                <td>Something</td>
                                <td><Link to="/delete">Edit</Link></td>
                                <td style={{ cursor: "pointer" }}>Delete</td>

                            </tr>
                            <tr>
                                <td>Jill</td>
                                <td>xxxxxxxxxx</td>
                                <td>Sri Lanka</td>
                                <td>Something</td>
                                <td><Link to="/delete">Edit</Link></td>
                                <td style={{ cursor: "pointer" }}>Delete</td>

                            </tr>
                            <tr>
                                <td>Eve</td>
                                <td>xxxxxxxxxx</td>
                                <td>USA</td>
                                <td>Something</td>
                                <td><Link to="/delete">Edit</Link></td>
                                <td style={{ cursor: "pointer" }}>Delete</td>

                            </tr>
                            <tr>
                                <td>Adam</td>
                                <td>xxxxxxxxxx</td>
                                <td>UK</td>
                                <td>Something</td>
                                <td><Link to="/delete">Edit</Link></td>
                                <td style={{ cursor: "pointer" }}>Delete</td>

                            </tr>
                            <tr>
                                <td>Jill</td>
                                <td>xxxxxxxxxx</td>
                                <td>Sri Lanka</td>
                                <td>Something</td>
                                <td><Link to="/delete">Edit</Link></td>
                                <td style={{ cursor: "pointer" }}>Delete</td>

                            </tr>
                            <tr>
                                <td>Eve</td>
                                <td>xxxxxxxxxx</td>
                                <td>USA</td>
                                <td>Something</td>
                                <td><Link to="/delete">Edit</Link></td>
                                <td style={{ cursor: "pointer" }}>Delete</td>

                            </tr>
                            <tr>
                                <td>Adam</td>
                                <td>xxxxxxxxxx</td>
                                <td>UK</td>
                                <td>Something</td>
                                <td><Link to="/delete">Edit</Link></td>
                                <td style={{ cursor:"pointer" }}>Delete</td>

                            </tr>

                        </table>
                    </div>

                </div>
                
                <Sidebar />

            </div>

        </>
    )

}