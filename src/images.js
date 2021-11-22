import bg01Component01 from "./images/bgComponent01/01_01.png";
import bg02Component01 from "./images/bgComponent02/02_01.png";
import bg03Component01 from "./images/bgComponent03/03_01.png";
import bg03Component02 from "./images/bgComponent03/03_02.png";
import bg03Component03 from "./images/bgComponent03/03_03.png";
import bg03Component04 from "./images/bgComponent03/03_04.png";
import bg03Component05 from "./images/bgComponent03/03_05.png";
import bg03Component06 from "./images/bgComponent03/03_06.png";
import bg04Component01 from "./images/bgComponent04/04_01.png";
import bg04Component02 from "./images/bgComponent04/04_02.png";
import bg04Component03 from "./images/bgComponent04/04_03.png";
import bg04Component04 from "./images/bgComponent04/04_04.png";
import bg04Component05 from "./images/bgComponent04/04_05.png";
import bg05Component01 from "./images/bgComponent05/05_01.png";
import bg06Component01 from "./images/bgComponent06/06_01.png";
import bg06Component02 from "./images/bgComponent06/06_02.png";
import bg07Component01 from "./images/bgComponent07/07_01.png";
import bg07Component02 from "./images/bgComponent07/07_02.png";
import bg08Component01 from "./images/bgComponent08/08_01.png";
import bg09Component01 from "./images/bgComponent09/09_01.png";
import bg10Component01 from "./images/bgComponent10/10_01.png";
import categoryIntroduction from "./images/category_introduction.png"
import categoryDevelop from "./images/category_develop.png"
import categoryDesign from "./images/category_design.png"
import categoryIntroductionW from "./images/category_introduction_w.png"
import categoryDevelopW from "./images/category_develop_w.png"
import categoryDesignW from "./images/category_design_w.png"
import AccordionArrow from "./images/accordionArrow.png"
import MainVisual from "./images/01_gulpAppSource/main-visual.png"
import Character01 from "./images/01_gulpAppSource/character01.png"
import Logo from "./images/01_gulpAppSource/logo.png"
import VideoImage from "./images/01_gulpAppSource/videoImage.png"
import PcFunction01 from "./images/01_gulpAppSource/pc_function01.png"
import PcFunction02 from "./images/01_gulpAppSource/pc_function02.png"
import PcFunction03 from "./images/01_gulpAppSource/pc_function03.png"
import PcFunction04 from "./images/01_gulpAppSource/pc_function04.png"
import PcFunction05 from "./images/01_gulpAppSource/pc_function05.png"
import PcFunction06 from "./images/01_gulpAppSource/pc_function06.png"
import WorkIssue01 from "./images/01_gulpAppSource/workIssue01.png"
import WorkIssue02 from "./images/01_gulpAppSource/workIssue02.png"
import Mission01 from "./images/01_gulpAppSource/mission01.png"
import Mission02 from "./images/01_gulpAppSource/mission02.png"

const categoryImages = [
    {image : categoryIntroduction, whiteImage : categoryIntroductionW },
    {image : categoryDevelop, whiteImage : categoryDevelopW},
    {image : categoryDesign, whiteImage : categoryDesignW},
]
// categoryImages[2].image
// categoryImages[2].whiteImage

const bgImages01 = {
    Image01: bg01Component01,
};
const bgImages02 = {
    Image01: bg02Component01,
};
const bgImages03 = {
    Image01: bg03Component01,
    Image02: bg03Component02,
    Image03: bg03Component03,
    Image04: bg03Component04,
    Image05: bg03Component05,
    Image06: bg03Component06,
};
const bgImages04 = {
    Image01: bg04Component01,
    Image02: bg04Component02,
    Image03: bg04Component03,
    Image04: bg04Component04,
    Image05: bg04Component05,
};
const bgImages05 = {
    Image01: bg05Component01,
};
const bgImages06 = {
    Image01: bg06Component01,
    Image02: bg06Component02,
};
const bgImages07 = {
    Image01: bg07Component01,
    Image02: bg07Component02,
};
const bgImages08 = {
    Image01: bg08Component01,
};
const bgImages09 = {
    Image01: bg09Component01,
};
const bgImages10 = {
    Image01: bg10Component01,
};

const icons = {
    accordionArrow : AccordionArrow,
}

const glupAppSources = {
    mainVisual : MainVisual,
    character01 : Character01,
    logo : Logo,
    video : VideoImage,
    pcFunction01: PcFunction01,
    pcFunction02: PcFunction02,
    pcFunction03: PcFunction03,
    pcFunction04: PcFunction04,
    pcFunction05: PcFunction05,
    pcFunction06: PcFunction06,
    workIssue01: WorkIssue01,
    workIssue02: WorkIssue02,
    mission01: Mission01,
    mission02: Mission02,
}

export { 
    bgImages01, 
    bgImages02, 
    bgImages03, 
    bgImages04, 
    bgImages05, 
    bgImages06, 
    bgImages07, 
    bgImages08, 
    bgImages09, 
    bgImages10, 
    categoryImages, 
    icons, 
    glupAppSources 
};
