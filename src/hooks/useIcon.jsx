

// weather icons 
import iconSunny from '../assets/images/icon-sunny.webp';
import iconDrizzle from '../assets/images/icon-drizzle.webp';
import iconFog from '../assets/images/icon-fog.webp';
import iconOvercast from '../assets/images/icon-overcast.webp';
import iconPartlyCloudy from '../assets/images/icon-partly-cloudy.webp';
import iconRain from '../assets/images/icon-rain.webp';
import iconSnow from '../assets/images/icon-snow.webp';
import iconStorm from '../assets/images/icon-storm.webp';

export default function useIcon(code) {

  // The following mapping technique was suggested by chatgpt
  const CODE_MAP = {
    sunny: new Set([0, 1]),
    partly_cloudy: new Set([2]),
    overcast: new Set([3]),
    fog: new Set([45, 48]),
    drizzle: new Set([51, 53, 55, 56, 57]),
    rain: new Set([61, 63, 65, 80, 81, 82, 66, 67]),
    snow: new Set([71, 73, 75, 77, 85, 86]),
    storm: new Set([95, 96, 99]),
  };

  const iconsArray = [iconSunny, iconDrizzle, iconFog,
		      iconOvercast, iconPartlyCloudy,
		      iconRain, iconSnow, iconStorm];

  const mapWeatherCodeToIcon = (code) => {
    if (CODE_MAP.sunny.has(code)) return iconSunny;
    if (CODE_MAP.partly_cloudy.has(code)) return iconPartlyCloudy;
    if (CODE_MAP.overcast.has(code)) return iconOvercast;
    if (CODE_MAP.fog.has(code)) return iconFog;
    if (CODE_MAP.drizzle.has(code)) return iconDrizzle;
    if (CODE_MAP.rain.has(code)) return iconRain;
    if (CODE_MAP.snow.has(code)) return iconSnow;
    if (CODE_MAP.storm.has(code)) return iconStorm;
  }

  return mapWeatherCodeToIcon(code);

}
