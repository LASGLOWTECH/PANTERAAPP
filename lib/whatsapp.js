// import axios from "axios";

// // Constants for API Version and Country Code (Nigeria is assumed from your logic)
// const API_BASE = "https://graph.facebook.com/v22.0";
// const DEFAULT_COUNTRY_CODE = "234";

// /**
//  * Ensures the phone number is in the correct E.164 format (CountryCode + Number, no +).
//  * If the number is a local 10-digit number (e.g., 080...), it assumes the default country code.
//  * @param {string | number} rawNumber - The phone number string or number.
//  * @returns {string} The formatted E.164 number (e.g., "2348031234567").
//  */
// function formatE164(rawNumber) {
//   let num = String(rawNumber).trim();

//   // 1. Remove non-digit characters (including '+', '-', spaces)
//   num = num.replace(/\D/g, '');

//   // 2. Check for international prefix (starts with 1-9, not 0)
//   // If it starts with a country code (e.g., 44...), we assume it's correctly formatted.
//   if (num.length > 10 && !num.startsWith("0")) {
//     // If it starts with '234' or another country code, it's likely already in E.164 format.
//     return num;
//   }

//   // 3. Handle local numbers (starting with '0')
//   if (num.startsWith("0")) {
//     // Remove the leading '0' (e.g., 080... -> 80...)
//     num = num.slice(1);
//     // Prefix with the default country code (e.g., 234 + 80...)
//     return DEFAULT_COUNTRY_CODE + num;
//   }
  
//   // 4. Handle numbers without a leading 0, assuming they are local numbers
//   // This case catches numbers like "8031234567" and prefixes them.
//   if (num.length === 10) {
//       return DEFAULT_COUNTRY_CODE + num;
//   }

//   // Fallback: If logic fails, return the cleaned number and let the API reject it
//   return num;
// }

// /**
//  * Sends a text message via the WhatsApp Cloud API.
//  * @param {object} config
//  * @param {string} config.phoneId - The WhatsApp Phone Number ID.
//  * @param {string} config.token - The permanent access token.
//  * @param {string | number} config.toNumber - The recipient's phone number.
//  * @param {string} config.message - The text message body.
//  * @returns {Promise<object>} The API response data.
//  * @throws {Error} If the API call fails.
//  */
// export async function sendWhatsAppCloud({ phoneId, token, toNumber, message }) {
//   const phone = formatE164(toNumber);

//   const payload = {
//     messaging_product: "whatsapp",
//     to: phone,
//     type: "text",
//     text: { body: message }
//   };

//   try {
//     const res = await axios.post(
//       `${API_BASE}/${phoneId}/messages`,
//       payload,
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           "Content-Type": "application/json"
//         }
//       }
//     );

//     console.log(`WhatsApp message sent to ${phone}. ID: ${res.data.messages?.[0]?.id}`);
//     return res.data;
//   } catch (err) {
//     // Extract and log the specific API error message for easier debugging
//     const errorMessage = err.response?.data?.error?.message 
//       || err.response?.data || err.message || "Unknown error";
      
//     console.error("WA CLOUD API ERROR:", errorMessage);
    
//     // Re-throw a custom error with the API's specific message
//     throw new Error(`WhatsApp API failed: ${errorMessage}`);
//   }
// }

// // --- Original Helper Function Refined ---

// /**
//  * Creates a wa.me link for direct WhatsApp chat.
//  * @param {string | number} phone - The recipient's phone number.
//  * @param {string} message - The pre-filled message text.
//  * @returns {string} The wa.me link.
//  */
// export function makeWaMeLink(phone, message) {
//   // Use the robust E.164 formatter, but with the '+' back for wa.me links
//   const num = "+" + formatE164(phone); 
//   const encoded = encodeURIComponent(message);
//   return `https://wa.me/${num}?text=${encoded}`;
// }



import axios from "axios";

// Constants for API Version and Country Code (Nigeria is assumed from your logic)
// Constants for API Version and Country Code (Nigeria is assumed from your logic)
const API_BASE = "https://graph.facebook.com/v24.0"; // <-- Updated to v24.0
const DEFAULT_COUNTRY_CODE = "234";
/**
 * Ensures the phone number is in the correct E.164 format (CountryCode + Number, no +).
 * If the number is a local 10-digit number (e.g., 080...), it assumes the default country code.
 * @param {string | number} rawNumber - The phone number string or number.
 * @returns {string} The formatted E.164 number (e.g., "2348031234567").
 */
function formatE164(rawNumber) {
  let num = String(rawNumber).trim();

  // 1. Remove non-digit characters (including '+', '-', spaces)
  num = num.replace(/\D/g, '');

  // 2. Check for international prefix (starts with 1-9, not 0)
  if (num.length > 10 && !num.startsWith("0")) {
    return num;
  }

  // 3. Handle local numbers (starting with '0')
  if (num.startsWith("0")) {
    num = num.slice(1);
    return DEFAULT_COUNTRY_CODE + num;
  }
  
  // 4. Handle numbers without a leading 0, assuming they are local numbers
  if (num.length === 10) {
      return DEFAULT_COUNTRY_CODE + num;
  }

  // Fallback: If logic fails, return the cleaned number
  return num;
}

// --- API Message Sender ---

/**
 * Sends a text message via the WhatsApp Cloud API.
 * @param {object} config
 * @param {string} config.phoneId - The WhatsApp Phone Number ID.
 * @param {string} config.token - The permanent access token.
 * @param {string | number} config.toNumber - The recipient's phone number.
 * @param {string} config.message - The text message body.
 * @returns {Promise<object>} The API response data.
 * @throws {Error} If the API call fails.
 */
export async function sendWhatsAppCloud({ phoneId, token, toNumber, message }) {
  const phone = formatE164(toNumber);

  const payload = {
    messaging_product: "whatsapp",
    to: phone,
    type: "text",
    text: { body: message }
  };

  try {
    const res = await axios.post(
      `${API_BASE}/${phoneId}/messages`,
      payload,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        }
      }
    );

    console.log(`WhatsApp message sent to ${phone}. ID: ${res.data.messages?.[0]?.id}`);
    return res.data;
  } catch (err) {
    const errorMessage = err.response?.data?.error?.message 
      || err.response?.data || err.message || "Unknown error";
      
    console.error("WA CLOUD API ERROR:", errorMessage);
    
    throw new Error(`WhatsApp API failed: ${errorMessage}`);
  }
}

// --- wa.me Link Generator ---

/**
 * Creates a wa.me link for direct WhatsApp chat.
 * @param {string | number} phone - The recipient's phone number.
 * @param {string} message - The pre-filled message text.
 * @returns {string} The wa.me link.
 */
export function makeWaMeLink(phone, message) {
  // Use the robust E.164 formatter, but with the '+' back for wa.me links
  const num = "+" + formatE164(phone); 
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${num}?text=${encoded}`;
}

// --- Critical Export for the Calling Code ---

/**
 * Exports the makeWaMeLink function under the name expected by the Next.js API route.
 */
export const generateReservationWaLink = makeWaMeLink;