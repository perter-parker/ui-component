import * as fs from "fs";
import * as path from "path";

// HeroSection 컴포넌트들 수정
const heroSections = [
  { num: 2, hasFeatures: true },
  { num: 3, hasFeatures: false },
  { num: 4, hasInput: true },
  { num: 5, hasInput: true, hasVideo: true },
  { num: 6, hasBackground: true },
  { num: 8, hasAvatars: true },
  { num: 9, hasVideo: true },
  { num: 10, hasLogos: true },
  { num: 11, hasFeatures: true },
  { num: 12, hasFeatures: true, hasAvatars: true },
];

// Navbar 컴포넌트들 수정
const navbars = [2, 3, 4, 5, 6];

console.log("⚠️  이 스크립트는 수동으로 각 컴포넌트를 수정해야 합니다.");
console.log("HeroSection2-12, Navbar2-6 컴포넌트들을 수동으로 수정해주세요.");

