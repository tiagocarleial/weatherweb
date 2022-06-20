export interface WeatherData {

    location: Location
    current_observation: CurrentObservation

}

export interface CurrentObservation {
    wind: Wind
    condition: Condition
    atmosphere: Atmosphere
    astronomy: Astronomy

  }

  export interface Wind {
    chill: number
    direction: number
    speed: number
  }

export interface Location {
    city: string
    region: string
    country: string
}

export interface Atmosphere {
    humidity: number
}

export interface Condition {
    temperature: number
    text: string
}

export interface Astronomy {
    sunrise: number
    sunset: number
}