import Footer from "../components/Footer";
import Header from "../components/Header";
import Home from "./home/page";
import Business from "./pages/business/page";
import MyVoice from "./pages/myVoice/page";
import BetaTesting from "./pages/betaTesting/page";
import Imprint from "./pages/ContentsPages/Imprint/page";
import PrivacyPolicy from "./pages/ContentsPages/PrivacyPolicy/page";
import TermsOfUse from "./pages/ContentsPages/TermsOfUse/page";
import Press from "./pages/ContentsPages/Press/page";
export default class App{
    constructor(page) {
        this.page = page;
        this.home = new Home(page);
        this.header = new Header(page);
        this.footer = new Footer(page);
        this.business = new Business(page);
        this.myVoice = new MyVoice(page);
        this.betaTesting = new BetaTesting(page);
        this.imprint = new Imprint(page);
        this.privacyPolicy = new PrivacyPolicy(page);
        this.termsOfUse = new TermsOfUse(page);
        this.press = new Press(page);
    }
}