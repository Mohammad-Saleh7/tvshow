import type { FC } from "react";
import * as React from "react";
import {
  Box,
  Button,
  Container,
  Divider,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer: FC = () => {
  const { t } = useTranslation("common");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      component="footer"
      sx={{
        mt: { xs: 6, md: 10 },
        py: { xs: 3, md: 4 },
        background:
          theme.palette.mode === "dark"
            ? "linear-gradient(180deg, rgba(21,29,50,0.85), rgba(49,54,71,0.85))"
            : "linear-gradient(180deg, #a8926a, #8f7a55)",
        borderTop:
          theme.palette.mode === "dark"
            ? "1px solid rgba(255,255,255,0.10)"
            : "1px solid rgba(103,52,27,0.18)",
        backdropFilter: "blur(10px)",
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 2 } }}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={{ xs: 2.5, md: 2 }}
          alignItems={{ xs: "stretch", md: "center" }}
          justifyContent="space-between"
          sx={{ textAlign: { xs: "center", md: "left" } }}
        >
          <Box
            sx={{
              width: "100%",
              maxWidth: { md: 560 },
              mx: { xs: "auto", md: 0 },
            }}
          >
            <Typography
              sx={{
                fontWeight: 900,
                letterSpacing: 0.2,
                color:
                  theme.palette.mode === "dark"
                    ? theme.palette.text.primary
                    : theme.palette.text.lightPrimary,
                fontSize: { xs: 16, sm: 18 },
                lineHeight: 1.2,
              }}
            >
              {t("footer.title")}
            </Typography>

            <Typography
              sx={{
                mt: 0.8,
                fontSize: { xs: 13, sm: 14 },
                color:
                  theme.palette.mode === "dark"
                    ? "rgba(231,242,239,0.72)"
                    : "rgba(103,52,27,0.72)",
                maxWidth: { xs: 520, md: 560 },
                mx: { xs: "auto", md: 0 },
                lineHeight: 1.7,
              }}
            >
              {t(
                "footer.subtitle",
                "Fresh taste, fast order, smooth experience."
              )}
            </Typography>
          </Box>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={1}
            alignItems="center"
            justifyContent="center"
            sx={{
              width: { xs: "100%", md: "auto" },
              rowGap: 1,
              flexWrap: { xs: "nowrap", sm: "wrap" },
            }}
          >
            <FooterLink to="/" fullWidth={isMobile}>
              {t("footer.home")}
            </FooterLink>
            <FooterLink to="/menu" fullWidth={isMobile}>
              {t("footer.menu")}
            </FooterLink>
            <FooterLink to="/cart" fullWidth={isMobile}>
              {t("footer.cart")}
            </FooterLink>
          </Stack>
        </Stack>

        <Divider
          sx={{
            my: { xs: 2.5, md: 3 },
            borderColor:
              theme.palette.mode === "dark"
                ? "rgba(255,255,255,0.10)"
                : "rgba(103,52,27,0.18)",
          }}
        />

        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={1}
          alignItems="center"
          justifyContent="space-between"
          sx={{
            textAlign: { xs: "center", sm: "left" },
            gap: { xs: 0.5, sm: 1 },
          }}
        >
          <Typography
            sx={{
              fontSize: 13,
              color:
                theme.palette.mode === "dark"
                  ? "rgba(231,242,239,0.65)"
                  : "rgba(103,52,27,0.70)",
              lineHeight: 1.6,
            }}
          >
            © {new Date().getFullYear()} Restaurant Uni — All rights reserved.
          </Typography>

          <Typography
            sx={{
              fontSize: 13,
              color:
                theme.palette.mode === "dark"
                  ? "rgba(231,242,239,0.65)"
                  : "rgba(103,52,27,0.70)",
              lineHeight: 1.6,
            }}
          >
            {t("footer.madeBy", "Made with ❤ using React + MUI")}
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;

function FooterLink({
  to,
  children,
  fullWidth,
}: {
  to: string,
  children: React.ReactNode,
  fullWidth?: boolean,
}) {
  return (
    <Button
      component={RouterLink}
      to={to}
      variant="text"
      fullWidth={fullWidth}
      sx={(theme) => ({
        px: { xs: 1.6, sm: 1.8 },
        py: { xs: 1.05, sm: 0.9 },
        borderRadius: 999,
        fontWeight: 900,
        letterSpacing: 0.2,
        textTransform: "none",
        width: { xs: "100%", sm: "auto" },
        maxWidth: { xs: 420, sm: "none" },
        minWidth: { sm: 108 },
        justifyContent: "center",
        color:
          theme.palette.mode === "dark"
            ? theme.palette.text.primary
            : theme.palette.text.lightPrimary,
        border:
          theme.palette.mode === "dark"
            ? "1px solid rgba(255,255,255,0.12)"
            : "1px solid rgba(103,52,27,0.22)",
        bgcolor:
          theme.palette.mode === "dark"
            ? "rgba(255,255,255,0.06)"
            : "rgba(255,255,255,0.35)",
        transition:
          "transform 140ms ease, background 140ms ease, border-color 140ms ease",
        "&:hover": {
          transform: "translateY(-1px)",
          bgcolor:
            theme.palette.mode === "dark"
              ? "rgba(255,255,255,0.10)"
              : "rgba(255,255,255,0.55)",
          borderColor:
            theme.palette.mode === "dark"
              ? "rgba(255,255,255,0.22)"
              : "rgba(103,52,27,0.35)",
        },
      })}
    >
      {children}
    </Button>
  );
}
