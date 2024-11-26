# Phishing Simulation Tool (Educational Use Only)

This project is a **phishing simulation tool** designed for ethical hacking, penetration testing, and cybersecurity awareness training. It allows authorized security professionals to simulate phishing attacks in a controlled environment for testing and training purposes.

> **IMPORTANT**: This tool is strictly for educational and ethical purposes. Unauthorized use is illegal and punishable under applicable laws. All testing must be done with prior written consent from the target organization.

---

## **Overview**
This tool simulates a phishing login page to:
- Demonstrate phishing attack techniques.
- Raise awareness of phishing risks among employees and users.
- Train individuals to identify phishing attempts.

It captures **user credentials** and their **IP address** to provide a practical demonstration of the potential risks of phishing attacks.

---

## **Features**
- Clone of a login page for phishing simulation.
- Captures user credentials and IP addresses.
- Exposes the local phishing simulation via Cloudflared for public access.
- Easy setup with Node.js and Express.

---

## **Usage**
### **Prerequisites**
1. Install [Node.js](https://nodejs.org/) on your system.
2. Install [Cloudflared](https://developers.cloudflare.com/cloudflare-one/connections/connect-apps/install-and-setup/installation/).

### **Steps to Run**
1. Clone this repository:
   ```bash
   git clone https://github.com/<your-username>/<your-repo>.git
   cd <your-repo>
2. Install dependencies:

   npm install
   
3. Start the local server:

   node server.js
   
4. Expose the server publicly using Cloudflared:

   cloudflared tunnel --url http://localhost:3000
   
5. Cloudflared will provide a public URL. Share this link with authorized testers for simulation.

