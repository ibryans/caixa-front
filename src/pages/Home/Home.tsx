import { AddSale } from "../../components/AddSale/AddSale"
import Header from "../../components/Header/Header"
import { Menu } from "../../components/Menu/Menu"
import { SalesList } from "../../components/SalesList/SalesList"
import ToPayList from "../../components/ToPayList/ToPayList"

export default function Home() {

    return (
        <>
            <Header/>
            <div className="col-md-6 col-sm-12 offset-md-3">
                <Menu/>
                <div className="tab-content">
                    <div className="tab-pane container active" id="sales">
                        <AddSale/>
                        <SalesList/>
                    </div>
                    <div className="tab-pane container" id="topay">
                        <ToPayList/>
                    </div>
                </div>
            </div>
        </>
    )
}