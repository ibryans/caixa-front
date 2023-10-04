import Header from "../../components/Header/Header"
import Menu from "../../components/Menu/Menu"
import SalesList from "../../components/SalesList/SalesList"

export default function Home() {

    return (
        <div className="col-6 offset-3">
            <Header/>

            <Menu/>

            <div className="tab-content">
                <div className="tab-pane container active" id="sales">
                    
                    <SalesList/>

                </div>
                <div className="tab-pane container" id="topay">

                    <p>teste</p>

                </div>
            </div>

        </div>
    )
}