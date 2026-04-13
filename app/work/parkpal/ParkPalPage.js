"use client";
import SiteHeader from "../../../components/SiteHeader";
import Footer from "../../../components/Footer";
import CaseStudyLayout from "../../../components/CaseStudyLayout";
import { GLOBAL_STYLES } from "../../../components/Styles";
import { CASE_STUDIES } from "../../../data/projects";

export default function ParkPalPage() {
  return (
    <>
      <style>{GLOBAL_STYLES}</style>
      <SiteHeader showTicker={false} />
      <CaseStudyLayout study={CASE_STUDIES.parkpal} backHref="/" backLabel="Back to Portfolio" />
      <Footer />
    </>
  );
}
