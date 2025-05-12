import { useState } from "react";
import PlaceAutocomplete from "./PlaceAutocomplete";

export default function ContactForm() {
  const today = new Date().toISOString().split("T")[0];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    moveDate: "",
    preferredTime: "",
    currentAddress: "",
    currentBuildingType: "",
    currentFlights: "",
    newAddress: "",
    newBuildingType: "",
    newFlights: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const isStairs = (type) => type.toLowerCase() === "stairs";

  return (
    <section id="quote" className="bg-accent py-36 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8 text-secondary">
          Get Your Free Quote
        </h2>
        <form
          action="https://formspree.io/f/xeogrewg"
          method="POST"
          className="bg-white p-8 rounded-lg shadow space-y-6"
        >
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold text-secondary mb-4">
              Contact Information
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                autoComplete="name"
                className="input-style"
                onChange={handleChange}
                value={formData.name}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                autoComplete="email"
                className="input-style"
                onChange={handleChange}
                value={formData.email}
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                required
                pattern="^[0-9]{10,15}$"
                autoComplete="tel"
                className="input-style sm:col-span-2"
                onChange={handleChange}
                value={formData.phone}
              />
            </div>
          </div>

          {/* Move Info */}
          <div>
            <h3 className="text-xl font-semibold text-secondary mb-4">
              Move Details
            </h3>
            <div className="space-y-4">
              <input
                type="date"
                name="moveDate"
                required
                min={today}
                className="input-style"
                onChange={handleChange}
                value={formData.moveDate}
              />

              <select
                name="preferredTime"
                required
                className="input-style w-full"
                onChange={handleChange}
                value={formData.preferredTime}
              >
                <option value="">Preferred Time of Day --</option>
                <option value="Morning (7am–11am)">Morning (7am–11am)</option>
                <option value="Afternoon (11am–3pm)">Afternoon (11am–3pm)</option>
                <option value="Evening (3pm–7pm)">Evening (3pm–7pm)</option>
              </select>

              <PlaceAutocomplete
                id="currentAddress"
                name="currentAddress"
                placeholder="Current Address"
                onPlaceSelect={(val) =>
                  setFormData((prev) => ({ ...prev, currentAddress: val }))
                }
              />

              <select
                name="currentBuildingType"
                required
                className="input-style w-full"
                onChange={handleChange}
                value={formData.currentBuildingType}
              >
                <option value="">Select Current Building Type --</option>
                <option value="Elevator">Elevator</option>
                <option value="Stairs">Stairs</option>
              </select>

              {isStairs(formData.currentBuildingType) && (
                <input
                  type="number"
                  name="currentFlights"
                  placeholder="How many flights of stairs?"
                  min="1"
                  required
                  className="input-style w-full"
                  onChange={handleChange}
                  value={formData.currentFlights}
                />
              )}

              <PlaceAutocomplete
                id="newAddress"
                name="newAddress"
                placeholder="New Address"
                onPlaceSelect={(val) =>
                  setFormData((prev) => ({ ...prev, newAddress: val }))
                }
              />

              <select
                name="newBuildingType"
                required
                className="input-style w-full"
                onChange={handleChange}
                value={formData.newBuildingType}
              >
                <option value="">Select New Building Type --</option>
                <option value="Elevator">Elevator</option>
                <option value="Stairs">Stairs</option>
              </select>

              {isStairs(formData.newBuildingType) && (
                <input
                  type="number"
                  name="newFlights"
                  placeholder="How many flights of stairs?"
                  min="1"
                  required
                  className="input-style w-full"
                  onChange={handleChange}
                  value={formData.newFlights}
                />
              )}

              <textarea
                name="message"
                placeholder="List of items or special instructions"
                rows="4"
                autoComplete="off"
                className="input-style w-full"
                onChange={handleChange}
                value={formData.message}
              ></textarea>
            </div>
          </div>

          {/* Formspree metadata */}
          <input type="hidden" name="_subject" value="🚚 New Quote Request from Clever Moving" />
          <input type="hidden" name="_replyto" value={formData.email} />

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-primary text-white font-semibold py-3 rounded hover:bg-opacity-90 transition"
          >
            Submit Quote
          </button>
        </form>
      </div>
    </section>
  );
}
