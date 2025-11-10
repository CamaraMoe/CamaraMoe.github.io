import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent


class TestPortfolioStructure(unittest.TestCase):
    def setUp(self):
        self.index_html = (ROOT / 'index.html').read_text(encoding='utf-8')
        self.style_css = (ROOT / 'style.css').read_text(encoding='utf-8')
        self.scroll_js = (ROOT / 'scroll.js').read_text(encoding='utf-8')

    def test_meta_description_present(self):
        self.assertIn(
            "meta name=\"description\"",
            self.index_html,
            "Meta description tag should be present for SEO and sharing.",
        )

    def test_hero_has_cta_buttons(self):
        self.assertIn(
            "View Projects",
            self.index_html,
            "Hero section should contain a primary call-to-action button.",
        )
        self.assertIn(
            "Connect with Me",
            self.index_html,
            "Hero section should contain a secondary call-to-action button.",
        )

    def test_scroll_uses_intersection_observer(self):
        self.assertIn(
            "IntersectionObserver",
            self.scroll_js,
            "Scroll animation should be driven by IntersectionObserver for performance.",
        )

    def test_fade_in_class_defined(self):
        self.assertIn(
            ".fade-in",
            self.style_css,
            "Fade-in class should be defined in the stylesheet.",
        )


if __name__ == "__main__":
    unittest.main()
