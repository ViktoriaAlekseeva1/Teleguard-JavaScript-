import Footer from "../components/Footer.js";
import Header from "../components/Header.js";
import Home from "./home/page.js";
import Business from "./pages/business/page.js";
import MyVoice from "./pages/myVoice/page.js";
import BetaTesting from "./pages/betaTesting/page.js";
import Imprint from "./pages/ContentsPages/Imprint/page.js";
import PrivacyPolicy from "./pages/ContentsPages/PrivacyPolicy/page.js";
import TermsOfUse from "./pages/ContentsPages/TermsOfUse/page.js";
import Press from "./pages/ContentsPages/Press/page.js";
import Donate from "./pages/donate/page.js";
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
        this.donate = new Donate(page);
    }
}