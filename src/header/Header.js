import './header.css';
import MneuHeader from './MenuHeader';
export default function Header() {
    let menuItems = { itm1: "خانه", itm2: "درباره ما", itm3: "خدمات", itm4: "نمونه کارها", itm5: "تیم", itm6: "لیست کشویی", itm7: "تماس با ما", }
    return (
        <div className="">
            {/* <MneuHeader text_brand="kaska" menuItems={{ itm1: "خانه", itm2: "درباره ما", itm3: "خدمات", itm4: "نمونه کارها", itm5: "تیم", itm6: "لیست کشویی", itm7: "تماس با ما", }} start_btn="شروع"></MneuHeader> */}
            <MneuHeader text_brand="kaska" menuItems={menuItems} start_btn="شروع"></MneuHeader>
        </div>
    )
}