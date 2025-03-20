interface ProjectsProps {
  title: string
}

const projectsData = [
  {
    title: "Dijital Showroom",
    description:
      "Ürünlerinizin dokusunun dijitalde hissedildiği bir ortam düşünün. Mockup tasarımların ötesinde kişilerin ürünlerle etkileşimde bulunabildiği bir ortamda, ürün kataloğunuzu profesyonelce sergileyin.",
    link: "#",
  },
  {
    title: "Ölç, Fark et, Geliştir",
    description:
      "Şirketinizde takip etmek istediğiniz durumları sizin için ölçüp analiz edip dijitale taşıyalım. Performans metriklerinizi görselleştirelim ve geliştirme önerileri sunalım. Düzenli raporlama sistemi ile gözünüz arkada kalmasın.",
    link: "#",
  },
  {
    title: "Oyun Geliştirme",
    description:
      "Geliştirdiğimiz oyunlar ve simülasyon projeleri ile Dünya genelinde 10 milyondan fazla kullanıcıya ulaştık. İster oyun fikrinizle isterseniz şirket içi durum simülasyonları geliştirip ekibinizi hazır edin.",
    link: "#",
  },
  {
    title: "Lorem Ipsum",
    description:
      "Velit dolor enim pariatur excepteur commodo mollit commodo qui pariatur esse consectetur. Elit proident et proident est anim et fugiat consectetur reprehenderit veniam dolore ut sint aliqua eu.",
    link: "#",
  },
]

const Projects: React.FC<ProjectsProps> = ({ title }) => {
  return (
    <section
      id="projects"
      className="flex flex-col items-center gap-8 px-2 md:px-4 py-8 md:py-12"
    >
      <h1 className="text-3xl font-bold">{title}</h1>
      <ul className="flex flex-wrap justify-center gap-12 md:gap-24">
        {projectsData.map((project, i) => (
          <li key={`p_${i}`} className="w-full md:w-[40%] flex flex-col gap-2">
            <div className="h-[300px] bg-neutral-500 rounded-3xl mb-2"></div>
            <h2 className="text-xl font-bold uppercase">{project.title}</h2>
            <p className="text-lg">{project.description}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Projects
