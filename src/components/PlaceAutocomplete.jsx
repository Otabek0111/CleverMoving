import { useEffect, useRef } from "react";

export default function PlaceAutocomplete({ id, name, placeholder, onPlaceSelect }) {
  const inputRef = useRef(null);

  useEffect(() => {
    const loadScript = () => {
      if (window.google && window.google.maps && window.google.maps.places) {
        initAutocomplete();
      } else {
        const script = document.createElement("script");
        script.src = `https://maps.googleapis.com/maps/api/js?key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY}&libraries=places`;
        script.async = true;
        script.defer = true;
        script.onload = initAutocomplete;
        document.head.appendChild(script);
      }
    };

    const initAutocomplete = () => {
      if (!inputRef.current) return;
      const autocomplete = new window.google.maps.places.Autocomplete(inputRef.current, {
        types: ["geocode"],
        fields: ["formatted_address"],
      });

      autocomplete.addListener("place_changed", () => {
        const place = autocomplete.getPlace();
        const address = place.formatted_address || "";
        if (onPlaceSelect) onPlaceSelect(address);
        inputRef.current.value = address; // Reflect in DOM
      });
    };

    loadScript();
  }, []);

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
