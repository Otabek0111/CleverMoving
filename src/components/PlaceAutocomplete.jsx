import { useEffect, useRef } from "react";

export default function PlaceAutocomplete({ id, name, placeholder, onPlaceSelect }) {
  const inputRef = useRef(null);
  const autocompleteRef = useRef(null);

  useEffect(() => {
    const initAutocomplete = () => {
      if (!window.google || !inputRef.current) return;

      autocompleteRef.current = new window.google.maps.places.Autocomplete(inputRef.current, {
        types: ["geocode"],
        componentRestrictions: { country: "us" },
        fields: ["formatted_address"],
      });

      autocompleteRef.current.addListener("place_changed", () => {
        const place = autocompleteRef.current.getPlace();
        const address = place.formatted_address || "";
        if (onPlaceSelect) onPlaceSelect(address);
        inputRef.current.value = address;
      });
    };

    const loadGoogleScript = () => {
      if (window.google) {
        initAutocomplete();
        return;
      }

      const scriptId = "google-maps-script";
      const existingScript = document.getElementById(scriptId);

      if (!existingScript) {
        const script = document.createElement("script");
        script.id = scriptId;
        script.src = `https://maps.googleapis.com/maps/api/js?key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY}&libraries=places`;
        script.async = true;
        script.defer = true;
        script.onload = initAutocomplete;
        document.head.appendChild(script);
      } else {
        existingScript.onload = initAutocomplete;
      }
    };

    loadGoogleScript();
  }, [onPlaceSelect]);

  return (
    <input
      type="text"
      id={id}
      name={name}
      placeholder={placeholder}
      className="input-style w-full"
      ref={inputRef}
      autoComplete="off"
    />
  );
}
