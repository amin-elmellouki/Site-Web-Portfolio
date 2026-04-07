# Design System Strategy: The Architectural Editorial

## 1. Overview & Creative North Star
**Creative North Star: "The Tectonic Manuscript"**

This design system is built for a practitioner who sits at the intersection of logic and lithography—a developer who builds with the precision of an architect and the soul of an artist. We are moving away from the "app-like" predictability of standard web grids. Instead, we treat the browser as a physical gallery wall or a high-end architectural monograph.

The visual language rejects the "safety" of centered layouts and rounded corners. It embraces **intentional asymmetry**, massive typographic scale shifts, and a heavy, grounded materiality. By utilizing large color blocks and a strict adherence to square edges (0px border radius), we create a space that feels permanent, authoritative, and sophisticated.

---

## 2. Colors & Materiality
The palette is deep, mossy, and cerebral. It is designed to be experienced in a low-light, high-focus environment.

* **Primary (Forest Green):** Use `primary_container` (#033325) for structural dominance. This is the "foundation" color for large layout blocks.
* **Accent (Deep Wine):** Use `on_secondary_fixed` (#2E121E) sparingly. This is for moments of "artistic tension"—call-to-actions, vital navigational anchors, or highlighting key philosophical points.
* **Base (Charcoal):** The `surface` (#121415) acts as the infinite void.

### The "No-Line" Rule
Traditional UI relies on 1px borders to separate ideas. This system forbids them. Boundaries must be defined strictly through:
1. **Background Color Shifts:** A `surface_container_low` section placed against a `surface` background.
2. **Abutting Blocks:** Placing a `primary_container` (Forest) block directly against a `secondary_container` (Wine) block to create a hard-edged horizon.

### Signature Textures: Digital Grain
Since we are avoiding glossy effects and glassmorphism, we inject "soul" through texture. All large color blocks should have a subtle, monochromatic noise filter applied (opacity 3-5%). This mimics the feel of unrefined paper or cast concrete, removing the sterile nature of digital hex codes.

---

## 3. Typography
The typography is a dialogue between the "Artist" (Serif) and the "Architect" (Sans-Serif).

* **The Artist (Noto Serif):** Used for `display` and `headline` roles. These should be set with tight letter spacing (-0.02em) to feel like masthead headers in a premium magazine.
* **The Architect (Manrope):** Used for `title`, `body`, and `label` roles. This sans-serif provides the functional clarity required for code snippets, technical descriptions, and navigation.

**Hierarchy as Identity:**
Use extreme scale contrast to guide the eye. A `display-lg` (3.5rem) headline should often be paired directly with a `label-sm` (0.6875rem) sub-header. This "High-Low" pairing is a hallmark of bespoke editorial design.

---

## 4. Elevation & Depth
In this system, depth is not "up" (shadows), but "in" (layering). We reject the concept of the light source.

* **The Layering Principle:** Depth is achieved by stacking containers from the Spacing Scale. Use `surface_container_lowest` for the background and `surface_container_high` for foreground elements.
* **The Ghost Border:** If a boundary is strictly required for accessibility (e.g., an input field), use the `outline_variant` token at 15% opacity. It should feel like a faint pencil mark on a blueprint, not a digital stroke.
* **Asymmetrical Offsets:** Instead of centering a card, offset it. If a container sits at `x: 0`, its content should perhaps start at `spacing-20` (7rem). This creates "white space" that feels like a conscious architectural choice rather than empty pixels.

---

## 5. Components

### Buttons
* **Primary:** A solid block of `primary` (#a3d0bc) with `on_primary` text. No rounded corners (`0px`).
* **Secondary:** A solid block of `secondary_container` with a `primary` "Ghost Border."
* **Interaction:** On hover, do not use glows. Instead, shift the background color to a higher tonal tier (e.g., `surface_bright`) or physically shift the button position by `1px` to mimic a mechanical press.

### Input Fields
* **Styling:** Forbid the 4-sided box. Use a single bottom stroke using the `outline` token or a solid block of `surface_container_high`.
* **Labeling:** Use `label-sm` in all-caps, placed `0.5rem` above the input to maintain a technical, schematized look.

### Cards & Lists
* **The Grid-Break:** Cards should never be the same width in a row. Use a 2/3 and 1/3 split for a two-column layout to maintain the "Atelier" feel.
* **Separation:** Forbid divider lines. Use `spacing-12` (4rem) of vertical whitespace or a subtle shift from `surface` to `surface_container_low`.

### The "Monolith" (Custom Component)
A large, full-bleed color block using `primary_container` that houses a single `display-lg` quote or heading. It should use `spacing-24` padding to force the user to slow down and acknowledge the transition between content sections.

---

## 6. Do's and Don'ts

### Do
* **Embrace the Edge:** Keep all `border-radius` values at `0px`. Sharpness equals precision.
* **Use Massive Margins:** Use `spacing-20` and `spacing-24` to create "breathable" transitions between projects.
* **Mix the Fonts:** Always pair a Serif headline with a Sans-Serif body. It creates the "Architect/Artist" tension required for the brand.

### Don't
* **No Shadows:** Do not use `box-shadow`. If you need to separate elements, use color blocking or tonal shifts.
* **No Centering:** Avoid `text-align: center`. Editorial design is almost always left-aligned or utilizes intentional "staggered" alignment.
* **No Gloss:** Absolutely no gradients that simulate light, no blurs, and no transparency. The interface should feel like solid matter.
* **No Standard Grids:** If the layout looks like a standard 12-column Bootstrap site, break it. Shift one column 40px down. Extend one image 10% past the margin. Stay intentional.