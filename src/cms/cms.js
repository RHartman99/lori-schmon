import CMS from "netlify-cms-app";
import IndexPreview from "./previews/IndexPreview";
import FooterPreview from "./previews/FooterPreview";

CMS.registerPreviewTemplate("home", IndexPreview);
CMS.registerPreviewTemplate("footer", FooterPreview);
