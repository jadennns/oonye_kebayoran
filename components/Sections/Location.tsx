import { useMediaQuery } from "react-responsive";

export default function Location() {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <section
      id="location"
      className="flex flex-col space-y-6 items-center justify-center h-[20rem]"
    >
      <div className="flex flex-col items-center space-y-4">
        <h1 className="text-primary-3 font-bold text-4xl">Location</h1>
        <p className="text-gray-900 text-lg">
          Our restaurant based in Jakarta.
        </p>
      </div>
      <div
        className={`flex ${
          isMobile && "flex-col space-y-2"
        } items-center space-x-14`}
      >
        <div className="bg-white rounded-md p-3 flex flex-col space-y-3 w-[20rem]">
          <p className="text-primary-3 font-bold text-xl">Oonye Kebayoran</p>
          <div className="bg-primary-4 rounded-md h-2 w-[3rem]" />
          <p className="text-gray-600" aria-label="Address">
            Jl. Ciledug Raya No.18, RT.1, Petukangan Sel., Kec. Pesanggrahan,
            Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12270
          </p>
          <p className="text-primary-3 text-base font-semibold">
            {"+62 081314156486"}
          </p>
          <div className="flex flex-col space-y-1">
            <p className="text-gray-600">Hours:</p>
            <div className="flex items-center space-x-2">
              <p className="text-gray-600">Tue-Sun:</p>
              <p className="text-primary-3 font-semibold">14.00 - 22.00</p>
            </div>
          </div>
        </div>
        <MapEmbed />
      </div>
      <br />
    </section>
  );
}

function MapEmbed() {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2074805711986!2d106.7575469!3d-6.2363602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1af2657bf8f%3A0x1e99950a0eb96424!2sOonye%20Kebayoran%20Pisang%20Kriuk!5e0!3m2!1sen!2sid!4v1654616524723!5m2!1sen!2sid"
      width={isMobile ? 300 : 600}
      height={isMobile ? 100 : 256}
      style={{ border: "0" }}
      allowFullScreen={false}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
}
