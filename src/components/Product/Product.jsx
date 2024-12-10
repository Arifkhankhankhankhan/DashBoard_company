import React from "react";

const Product = () => {
  const data = {
    products: [
      {
        rank: 1,
        name: "Maggie",
        setCount: 50,
        value: "$500",
        img: "https://apnafoodmarket.com/wp-content/uploads/2020/06/maggi-2-minutes-noodles.jpg",
      },
      {
        rank: 2,
        name: "Nestle",
        setCount: 30,
        value: "$300",
        img: "https://www.jiomart.com//images/product/240x240/491010436/nestle-everyday-dairy-whitener-400-g-pouch-product-images-o491010436-p491010436-0-202203151953.jpg",
      },
      {
        rank: 3,
        name: "CocaCola",
        setCount: 40,
        value: "$400",
        img: "https://images-cdn.ubuy.co.in/6621509c0374cf33db1f6c34-coca-cola-classic-cola-soda-pop-8-fl-oz.jpg",
      },
      {
        rank: 4,
        name: "Fanta",
        setCount: 25,
        value: "$250",
        img: "https://cdn.zeptonow.com/production///tr:w-600,ar-1021-1021,pr-true,f-auto,q-80/cms/product_variant/0b7b8286-4a6c-4577-9597-bdbaad777975.jpeg",
      },
      {
        rank: 5,
        name: "CreamBell",
        setCount: 20,
        value: "$200",
        img: "https://www.creambell.com/wp-content/uploads/2022/06/132_Double_Chocolate_500ML_01-480x585.png",
      },
    ],
    distributors: [
      {
        rank: 1,
        name: "Verma Enterprises",
        target: 10,
        achieved: 8,
        img: "https://as1.ftcdn.net/v2/jpg/01/22/73/50/1000_F_122735064_RwTWigi1iOhRN2yWoFezqE3qzP3IRgwj.jpg",
      },
      {
        rank: 2,
        name: "SK Enterprises",
        target: 8,
        achieved: 5,
        img: "https://as1.ftcdn.net/v2/jpg/04/55/47/10/1000_F_455471019_kg65ilmq1VI7MRlFmgDOxHirQkEZQl38.jpg",
      },
      {
        rank: 3,
        name: "SP Traders",
        target: 7,
        achieved: 6,
        img: "https://as2.ftcdn.net/v2/jpg/01/08/44/77/1000_F_108447715_hCHM78fVac0KAplCwNY41HSCMwg35zOc.jpg",
      },
      {
        rank: 4,
        name: "Gupta Enterprises",
        target: 6,
        achieved: 5,
        img: "https://as1.ftcdn.net/v2/jpg/08/03/23/92/1000_F_803239262_AOvaGrkk9LHnrBbRBlLn6SOieWw9Xt4g.jpg",
      },
      {
        rank: 5,
        name: "YS Traders",
        target: 5,
        achieved: 4,
        img: "https://as1.ftcdn.net/v2/jpg/01/97/65/68/1000_F_197656845_g6KIUkpukbzWRT7UZ436PECBfPhJ5eDb.jpg",
      },
    ],
    activations: [
      {
        rank: 1,
        name: "Verma Enterprises",
        achieved: 21,
        lastOrder: 5,
        img: "https://as1.ftcdn.net/v2/jpg/01/22/73/50/1000_F_122735064_RwTWigi1iOhRN2yWoFezqE3qzP3IRgwj.jpg",
      },
      {
        rank: 2,
        name: "SK Enterprises",
        achieved: 15,
        lastOrder: 3,
        img: "https://as1.ftcdn.net/v2/jpg/04/55/47/10/1000_F_455471019_kg65ilmq1VI7MRlFmgDOxHirQkEZQl38.jpg",
      },
      {
        rank: 3,
        name: "SP Traders",
        achieved: 18,
        lastOrder: 4,
        img: "https://as2.ftcdn.net/v2/jpg/01/08/44/77/1000_F_108447715_hCHM78fVac0KAplCwNY41HSCMwg35zOc.jpg",
      },
      {
        rank: 4,
        name: "Gupta Enterprises",
        achieved: 14,
        lastOrder: 2,
        img: "https://as1.ftcdn.net/v2/jpg/08/03/23/92/1000_F_803239262_AOvaGrkk9LHnrBbRBlLn6SOieWw9Xt4g.jpg",
      },
      {
        rank: 5,
        name: "YS Traders",
        achieved: 12,
        lastOrder: 3,
        img: "https://as1.ftcdn.net/v2/jpg/01/97/65/68/1000_F_197656845_g6KIUkpukbzWRT7UZ436PECBfPhJ5eDb.jpg",
      },
    ],
  };

  return (
    <div
      style={{
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        border: "1px solid #00C1F4",
       
      }}
    >
      <Header title="INSIGHTS SNAPSHOT" />
      <div
        style={{
          display: "flex",
          gap: "20px",
          marginTop: "20px",
          flexWrap: "wrap",
         
        }}
      >
        <Card title="TOP 10 PRODUCTS" items={data.products} />
        <Card title="TOP 10 DISTRIBUTORS" items={data.distributors} />
        <Card title="NEW ACTIVATION" items={data.activations} />
      </div>
    </div>
  );
};

const Header = ({ title }) => (
  <div
    style={{
      backgroundColor: "#00C1F4",
      padding: "10px",
      textAlign: "start",
      color: "#FFFFFF",
      fontWeight: "bold",
      fontSize: "18px",
      border: "1px solid #F0F0F0",
      width:"fit-content",
      marginLeft:"-20px"
    }}
  >
    {title}
  </div>
);

const Card = ({ title, items }) => (
  <div
    style={{
      flex: "1",
      minWidth: "300px",
      border: "1px solid #F0F0F0",
      borderRadius: "8px",
      backgroundColor: "#FFFFFF",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      overflow: "hidden",
    }}
  >
    <div
      style={{
        backgroundColor: "#00C1F4",
        color: "#FFFFFF",
        padding: "10px",
        fontWeight: "bold",
        textAlign: "center",
        borderBottom: "1px solid #F0F0F0",
      }}
    >
      {title}
    </div>
    <div style={{ maxHeight: "300px", overflowY: "auto", padding: "10px" }}>
      {items.map((item, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "10px",
            paddingBottom: "8px",
            borderBottom: "1px solid #F0F0F0",
          }}
        >
          <div style={{ marginRight: "10px", fontWeight: "bold" }}>
            {item.rank}
          </div>
          <img
            src={item.img}
            alt={item.name}
            style={{
              width: "50px",
              height: "50px",
              marginRight: "10px",
              borderRadius: "5px",
              border: "1px solid #F0F0F0",
            }}
          />
          <div>
            <p style={{ margin: 0, fontWeight: "bold" }}>{item.name}</p>
            {item.setCount !== undefined && (
              <p style={{ margin: 0, fontSize: "12px", color: "#666" }}>
                Set Count: {item.setCount}
              </p>
            )}
            {item.value && (
              <p style={{ margin: 0, fontSize: "12px", color: "#666" }}>
                Value: {item.value}
              </p>
            )}
            {item.target !== undefined && (
              <p style={{ margin: 0, fontSize: "12px", color: "#666" }}>
                Target: {item.target}
              </p>
            )}
            {item.achieved !== undefined && (
              <p style={{ margin: 0, fontSize: "12px", color: "#666" }}>
                Achieved: {item.achieved}
              </p>
            )}
            {item.lastOrder !== undefined && (
              <p style={{ margin: 0, fontSize: "12px", color: "#666" }}>
                Last Order: {item.lastOrder}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
    <div
      style={{
        textAlign: "right",
        padding: "10px",
        color: "#00C1F4",
        fontWeight: "bold",
        cursor: "pointer",
        borderTop: "1px solid #F0F0F0",
      }}
    >
      View All
    </div>
  </div>
);

export default Product;
