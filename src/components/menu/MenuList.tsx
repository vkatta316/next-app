import Image from "next/image";

export function MenuList({menu}) {
  
  return (
    <>
      <div className="content-section-title">Menu</div>
      <div className="content-list">
        { menu.map(item =>
          <div className="content-item" key={item.id}>
            <div className="content-item__image-container">
              <Image 
                src={item.image} 
                style={{objectFit: "cover"}}
                fill={true}
                sizes="(max-width: 768px)"
                alt={item.name} 
              />
            </div>
            <div className="content-item__header">
              <div>{item.title}</div>
              <div>{item.description}</div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}