import { describe, expect, it } from "vitest";
import { bannerConfig, slotDocument, SOCIAL_BAR_URL } from "@/lib/adsterra";

describe("Adsterra rules", () => {
  it("uses 320x50 only below 400px", () => {
    expect(bannerConfig(399)).toEqual({ key: "79ebcae2d7c54504ff46daa6f586ca08", width: 320, height: 50 });
    expect(bannerConfig(400)).toEqual({ key: "1852596c667e84526d84e4746f35be9f", width: 300, height: 250 });
  });
  it("loads the supplied banner endpoint", () => {
    expect(slotDocument("banner", 1280)).toContain('src="https://bauval.org/22/1852596c667e84526d84e4746f35be9f"');
  });
  it("loads the supplied native endpoint", () => {
    expect(slotDocument("native", 1280)).toContain('src="https://bauval.org/21/295af5bb4bb21bdbb9a3dd1905d16419"');
  });
  it("uses the supplied global social bar endpoint", () => {
    expect(SOCIAL_BAR_URL).toBe("https://bauval.org/14/672fb36d446ac9312b9cab5919848f4d");
  });
});