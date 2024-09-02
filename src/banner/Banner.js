import "./banner.css";
import "fontawesome/index";

export default function Banner({text_header,btn_text}) {
    return (
        <div className="big-header">
            <div className="container-fluid">
                <div className="">
                 <div className="wrapp-header">
                 <div className="row">
                        <div className="col-6 col-sm-6 col-md-3 col-lg-3 col-xl-3 col-xxl-3 rtl-theme">
                            <img src="rtl-theme.png" alt="" />
                        </div>
                        <div className="d-none d-md-block col-md-4 col-lg-4 col-xl-4 col-xxl-4 text-header">
                           <div className="d-flex justify-content-center pt-2 pe-5">
                           <span>{text_header}</span>
                           </div>
                        </div>
                        <div className="col-6 col-sm-6 col-md-5 col-lg-5 col-xl-5 col-xxl-5 buy-sell-btn">
                            <div className="d-flex justify-content-end ">
                          
                            <button className="btn btn-primary">{btn_text}</button>
                            </div>
                        </div>
                    </div>
                 </div>
                </div>
            </div>
        </div>
    )
}