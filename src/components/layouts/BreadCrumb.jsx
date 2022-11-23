import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { Container } from "@mui/system";

export default function breadcrumb({ path = [] }) {
  return (
    <div style={{ paddingBottom: "1.1rem", borderBottom: "2px solid #DDD" }}>
      <Container>
        <Breadcrumbs
          style={{ fontSize: ".9rem", fontWeight: "bold" }}
          aria-label="breadcrumb"
        >
          {path.map((link, index) => (
            <Link
              color={index == path.length - 1 ? "text.primary" : "inherit"}
              key={link}
              underline="hover"
              href="/"
            >
              {link}
            </Link>
          ))}
        </Breadcrumbs>
      </Container>
    </div>
  );
}
