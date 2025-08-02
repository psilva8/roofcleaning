import BeforeAfter from './BeforeAfter';

const transformations = [
  {
    title: 'Driveway Transformation',
    beforeImage: '/images/driveway-before.jpg',
    afterImage: '/images/driveway-after.jpg',
    beforeAlt: 'Dirty driveway before pressure washing',
    afterAlt: 'Clean driveway after pressure washing'
  },
  {
    title: 'House Exterior Washing',
    beforeImage: '/images/house-before.jpg',
    afterImage: '/images/house-after.jpg',
    beforeAlt: 'House exterior before washing',
    afterAlt: 'House exterior after washing'
  },
  {
    title: 'Commercial Building Restoration',
    beforeImage: '/images/commercial-before.jpg',
    afterImage: '/images/commercial-after.jpg',
    beforeAlt: 'Commercial building before washing',
    afterAlt: 'Commercial building after washing'
  }
];

const Transformations = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Transformations</h2>
          <p className="text-xl text-gray-600">See the dramatic difference our pressure washing services can make</p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {transformations.map((transform, index) => (
            <BeforeAfter
              key={index}
              title={transform.title}
              beforeImage={transform.beforeImage}
              afterImage={transform.afterImage}
              beforeAlt={transform.beforeAlt}
              afterAlt={transform.afterAlt}
            />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="tel:+12136649502" 
            className="inline-block bg-primary text-white font-semibold px-8 py-3 rounded-md hover:bg-primary/90 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            Call For A Free Quote
          </a>
        </div>
      </div>
    </section>
  );
};

export default Transformations; 