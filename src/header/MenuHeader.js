export default function MneuHeader({ text_brand, menuItems, start_btn }) {
    // another way for object destructuring 
    // export default function MneuHeader({text_brand,start_btn}) {
    // let { text_brand ,start_btn } = props; object destructuring

    return (
        <div className="menuheader-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-6 col-sm-6 col-md-6 col-md-6 col-lg-3 col-xl-3 col-xxl3-">
                        <span className="text-brand">{text_brand}</span>
                        {/* <span className="text-brand">{text_brand}</span> object destructuring in the parameter of function */}
                    </div>
                    {/* </span>{props.text_brand}</div> */}
                    {/* </span>{text_brand}</div> * object destructuring /}
              
                            {/* <li><a href="">{props.menuItems.itm1}</a></li> */}
                    <div className="d-none d-lg-block  col-lg-7 col-xl-7 col-xxl-7">

                        <ul className="d-flex justify-content-between align-items-center h-100">
                            <li><a href=""></a>{menuItems.itm1}</li>
                            {/* <li><a href=""></a>{menuItems.itm1} object destrucring in the parameter of function we did the object destructruing in function</li> */}
                            <li><a href="">{menuItems.itm2}</a></li>
                            <li><a href="">{menuItems.itm3}</a></li>
                            <li><a href="">{menuItems.itm4}</a></li>
                            <li><a href="">{menuItems.itm5}</a></li>
                            <li><a href="">{menuItems.itm6}</a></li>
                            <li><a href="">{menuItems.itm7}</a></li>
                        </ul>

                    </div>
                    <div className="col-6 col-sm-6 col-md-6 col-lg-2 col-xl-2 col-xxl-2"><span>{start_btn}</span></div>
                </div>
            </div>
        </div>
    )
}