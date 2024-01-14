import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Layout from "../components/layout";
import SEO from "../components/seo";

function PermissionsCalculatorPrivacyPolicyPage() {
  return (
    <Layout>
      <SEO title="Permissions Calculator Privacy Policy"/>
      <Container maxWidth="lg">
        <Typography variant="h4">
          Linux Permissions Calculator Privacy Policy
        </Typography>

        <Typography paragraph>
          Last Updated: 2024-01-14
        </Typography>

        <Typography paragraph>
          Thank you for using Linux Permissions Calculator! This Privacy Policy outlines my commitment to your privacy
          and explains that I do not collect any personal information from users.
        </Typography>

        <Typography variant="h5">
          Information Collection
        </Typography>
        <Typography paragraph>
          I do not collect any personal information, including but not limited to:
        </Typography>
        <ul>
          <li>User-provided information.</li>
          <li>Automatically collected information.</li>
        </ul>

        <Typography variant="h5">
          How We Use Your Information
        </Typography>
        <Typography paragraph>
          Since I do not collect any user information, there is no information to use.
        </Typography>

        <Typography variant="h5">
          Information Sharing
        </Typography>
        <Typography paragraph>
          As I do not collect any personal information, I do not share any information with third parties.
        </Typography>

        <Typography variant="h5">
          Security
        </Typography>
        <Typography paragraph>
          While I do not collect any user information, I am committed to the security of your data. The app is
          designed to operate without the need for user data storage or processing.
        </Typography>

        <Typography variant="h5">
          Changes to This Privacy Policy
        </Typography>
        <Typography paragraph>
          I reserve the right to update this Privacy Policy from time to time. Any changes will be reflected on this
          page.
        </Typography>

        <Typography variant="h5">
          Your Consent
        </Typography>
        <Typography paragraph>
          By using the app, you acknowledge and agree that I do not collect any personal information.
        </Typography>

        <Typography variant="h5">
          Contact Us
        </Typography>
        <Typography paragraph>
          If you have any questions or concerns about this Privacy Policy, please contact me via email. The email
          address can be found in the <em>App support</em> section of the Linux Permissions Calculator app listing in
          the Play Store.
        </Typography>
      </Container>
    </Layout>
  );
}

export default PermissionsCalculatorPrivacyPolicyPage;
