const LocationSection = () => {
    return (
        <section className="py-16">
            <div className="max-w-6xl mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Office Location</h2>
                <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                    Visit us at our office or find us on Google Maps. We’re always happy to meet you!
                </p>
                <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-lg">
                    <iframe
                        title="Company Location"
                        width="100%"
                        height="100%"
                        loading="lazy"
                        allowFullScreen
                        className="border-0 w-full h-full"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.9034943956433!2d90.39104997584263!3d23.750876178688392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c78fd78c32cd%3A0x7b39d158e7a5103e!2sDhaka%2C%20Bangladesh!5e0!3m2!1sen!2sus!4v1718370720000!5m2!1sen!2sus"
                    ></iframe>
                </div>
            </div>
        </section>
    );
};

export default LocationSection;
