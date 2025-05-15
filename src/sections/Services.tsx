import { services } from "../constants";
import ServiceCard from "../components/ServiceCard";
import { ServiceItem } from "../constants";

const Services = () => {
  return (
    <section className="max-container flex justify-center flex-wrap gap-9">
      {services.map((service: ServiceItem) => (
        <ServiceCard key={service.label} {...service}/>
      ))}
    </section>
  )
}

export default Services
