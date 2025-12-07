export async function reverseGeocode(latitude, longitude) {
  try {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/reverse?lon=${longitude}&lat=${latitude}&format=json`
    );
    const data = await response.json();
    return {
      name: data.address.city || data.address.town || data.address.village || 'Unknown',
      country: data.address.country || ''
    };
  } catch (err) {
    console.error('Error: ', err);
  }
}
