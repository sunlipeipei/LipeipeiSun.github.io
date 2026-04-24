import React, { useState, useEffect, useRef } from 'react';
import { imgUrl } from '../../utils/assetUrl';

const photos = [
  '/Images/08_Photo.jpeg',
  '/Images/08_Photography/14_MillerHull_PikePlaceMarketFront_PS_300dpi.jpg',
  '/Images/08_Photography/16_MillerHull_PikePlaceMarketFront_PS_300dpi_(1).jpg',
  '/Images/08_Photography/033601CA-E803-4DF3-BA2E-498A62330265_1_105_c.jpeg',
  '/Images/08_Photography/051B5BCB-1F73-41AE-854E-5737B5EA33C7_1_105_c.jpeg',

  '/Images/08_Photography/0D042E87-571D-449F-8E1C-74CD24316F09_1_105_c.jpeg',
  '/Images/08_Photography/0EEB3F57-7518-49CB-A75C-2542A6270BC9_1_105_c.jpeg',
  '/Images/08_Photography/11B15EE7-2F6D-4EB0-8F69-E2A7A271A75A_1_105_c.jpeg',
  '/Images/08_Photography/14908508-8404-4848-AF0C-F98E713C61E2_1_105_c.jpeg',
  '/Images/08_Photography/17010722-E957-4147-A253-0570DA96E81F_1_105_c.jpeg',
  '/Images/08_Photography/1D83AAD0-0A63-4A58-8FCF-AD3232DC4A6E_1_105_c.jpeg',
  '/Images/08_Photography/1E79B793-D87F-4F31-9D6B-3BAFF04A6482_1_105_c.jpeg',
  '/Images/08_Photography/21E1C630-34F1-4E40-BF7A-02827AEEFCA9_1_105_c.jpeg',
  '/Images/08_Photography/23DF9057-F4AA-407D-A379-0BA701490E92_1_105_c.jpeg',
  '/Images/08_Photography/25BE1497-FCBA-458F-AE28-CBEB71B44525_1_105_c.jpeg',
  '/Images/08_Photography/2654D6CC-CAB1-4345-A381-CB1779D288D8_1_105_c.jpeg',
  '/Images/08_Photography/2B6BE620-0F93-4F7E-942D-AE1806DD3CB7_1_105_c.jpeg',
  '/Images/08_Photography/2C7724C3-ACFC-497B-AD3D-58289942D6BE_1_105_c.jpeg',
  '/Images/08_Photography/33A522B4-DD2A-43AC-BF28-24CE293E57F3_1_105_c.jpeg',
  '/Images/08_Photography/3465F8EE-F2EC-487D-9444-2F7E7BCBC77E_1_105_c.jpeg',
  '/Images/08_Photography/364781E8-F8BB-4572-906F-074855C622B9_1_105_c.jpeg',

  '/Images/08_Photography/374D9D3F-BD65-4EEF-9472-AE0CD1DFE8DD_1_105_c.jpeg',
  '/Images/08_Photography/3C6E2700-96BE-4DB2-939C-F606CD63C2CF_1_105_c.jpeg',
  '/Images/08_Photography/3CAF691C-6F2A-4FCB-8BBD-28E2294F5341_1_105_c.jpeg',
  '/Images/08_Photography/3EBC5C6F-517B-4E05-A1B1-12BD91D63079_1_105_c.jpeg',
  '/Images/08_Photography/3F8701A3-D818-4C0C-8862-E97279696191_1_105_c.jpeg',
  '/Images/08_Photography/42B4F969-FEBF-419C-B4ED-AEEA12345AC0_1_105_c.jpeg',
  '/Images/08_Photography/4398CD2E-11F4-4BEB-83BD-3B0CB4F65D5F_1_105_c.jpeg',
  '/Images/08_Photography/4429C4F4-AEB2-4D5C-85F2-39DB9C39D5AB_1_105_c.jpeg',
  '/Images/08_Photography/4541EC21-35BD-4495-B945-8B3D8781C217_1_105_c.jpeg',
  '/Images/08_Photography/4566FE9F-33B7-4640-AD43-D8685A21B980_1_105_c.jpeg',
  '/Images/08_Photography/4C45D5AD-81F1-42CA-B297-EA2082BB5470_1_105_c.jpeg',
  '/Images/08_Photography/4D332E14-29CD-4C5E-9D4E-753A26135F2C_1_105_c.jpeg',
  '/Images/08_Photography/4D96AE8A-5535-4F99-9E56-558453432E76_1_105_c.jpeg',
  '/Images/08_Photography/4F3A468F-6928-41EF-8BDA-8AE7F99B75F4_1_105_c.jpeg',
  '/Images/08_Photography/50F3ECA6-AFDF-479B-A225-F1F6DEFC2AC6_1_105_c.jpeg',
  '/Images/08_Photography/5AD1B2C8-30BD-4C68-93AD-6D85172F1CF8_1_105_c.jpeg',
  '/Images/08_Photography/5B557331-B812-46C1-AC78-A1ACB12F27F1_1_105_c.jpeg',
  '/Images/08_Photography/5B5740BA-9D00-4FAF-B8F7-5E2765C3AF15_1_105_c.jpeg',
  '/Images/08_Photography/5CDAF204-E552-4987-8CDB-5452AF6EF4DD_1_105_c.jpeg',
  '/Images/08_Photography/5CFBA9EC-0E86-4C1C-8EC3-965A847BE25B_1_105_c.jpeg',
  '/Images/08_Photography/5D124F8F-F46F-43D6-921E-EC7E91390FE5_1_105_c.jpeg',
  '/Images/08_Photography/5E95CEFE-8665-4F5D-8328-CF16E96A0DF3_1_105_c.jpeg',
  '/Images/08_Photography/5EEA2F6C-D51E-4556-AAF1-A679E36D3BAF_1_105_c.jpeg',
  '/Images/08_Photography/61CB5328-B5EB-45D2-8B8F-BC4A5AB2E1F7_1_105_c.jpeg',
  '/Images/08_Photography/71C78E74-5071-4B18-A0E2-D966F1F65C60_1_105_c.jpeg',
  '/Images/08_Photography/71F3240D-3761-45D3-A2EF-C321B8696991_1_105_c.jpeg',
  '/Images/08_Photography/72D7C282-939D-4524-9E7D-04217C8ADDC2_1_105_c.jpeg',
  '/Images/08_Photography/737D4652-D7B9-45D8-AEDE-9226EA62B621_1_105_c.jpeg',
  '/Images/08_Photography/7698F95A-350E-436A-BB6F-29628E82B3A9_1_105_c.jpeg',
  '/Images/08_Photography/76B132B5-B22A-493C-84E4-E1934358479E_1_105_c.jpeg',
  '/Images/08_Photography/7941B195-E89F-4685-B656-7D6E25D90440_1_105_c.jpeg',
  '/Images/08_Photography/798FC290-65A1-45D0-B998-D85553F897E5_1_105_c.jpeg',
  '/Images/08_Photography/7EAA6790-7D36-4630-B07D-0AADCDDB2486_1_105_c.jpeg',
  '/Images/08_Photography/7F366E29-33A0-4964-9102-2D5E846898F5_1_105_c.jpeg',
  '/Images/08_Photography/817ABDC9-585D-4655-A7F6-3B006C9EFE1B_1_105_c.jpeg',
  '/Images/08_Photography/82031229-BF69-4E3C-B59C-9B406D8D9C03_1_105_c.jpeg',
  '/Images/08_Photography/843B302F-7E8C-42F6-8581-F39B2B09B94E_4_5005_c.jpeg',
  '/Images/08_Photography/858ABDBE-4752-4496-BCCB-A7399DD2A65D_1_105_c.jpeg',
  '/Images/08_Photography/85AF91CB-D3CF-460F-8018-37AC6B7CD992_1_105_c.jpeg',
  '/Images/08_Photography/86D78AC9-9D12-4E9E-BE24-F42AF40216CE_1_105_c.jpeg',
  '/Images/08_Photography/86F0ECFD-CA6E-40FD-A42A-5F005CCAFBBC_1_105_c.jpeg',
  '/Images/08_Photography/87FEE4A7-572F-441C-A5DB-C08F0D71F934_1_105_c.jpeg',
  '/Images/08_Photography/8ABD43B2-BCAB-4461-BAB5-9CB49990F857_1_105_c.jpeg',
  '/Images/08_Photography/8BAA12C7-4D4B-41DE-9E79-427F5195014D_1_105_c.jpeg',
  '/Images/08_Photography/8F966C7F-D0EA-408C-A09B-BEFFF495F3A9_1_105_c.jpeg',
  '/Images/08_Photography/9208489F-3035-401B-8D49-E80319126341_1_105_c.jpeg',
  '/Images/08_Photography/98D20450-6910-4B53-A1F5-69E96036C074_4_5005_c.jpeg',
  '/Images/08_Photography/A297D89B-EDDE-4DCB-8678-8312A219C67B_1_105_c.jpeg',
  '/Images/08_Photography/A5AEE962-EF6C-45CB-A12C-46D49A7A54FA_4_5005_c.jpeg',
  '/Images/08_Photography/A729A1CF-1780-4059-BCF9-2FC2C5340EB0_1_105_c.jpeg',
  '/Images/08_Photography/AB580259-5748-493C-90F7-5C8F73578B13_1_105_c.jpeg',
  '/Images/08_Photography/AC2D61A0-DEA1-4A64-9472-7FE10974D341_1_105_c.jpeg',
  '/Images/08_Photography/AFAD326D-ED00-45CB-8250-6065178331DE_1_105_c.jpeg',
  '/Images/08_Photography/B006889B-5C60-4BAF-95F4-C488FAFE8027_1_105_c.jpeg',
  '/Images/08_Photography/B0304E43-85BA-4FA2-BA47-84AF27E86348_1_105_c.jpeg',
  '/Images/08_Photography/B06FB959-E663-400A-BAAE-BE30B8417FCD_1_105_c.jpeg',
  '/Images/08_Photography/B1D8EE26-ECAC-480D-BF22-B0CD25CC248F_1_105_c.jpeg',
  '/Images/08_Photography/B5AB08DE-3207-4481-BB66-24D763511D98_1_105_c.jpeg',
  '/Images/08_Photography/BAFAA733-CD3F-46B2-A8A4-07C994396C46_1_105_c.jpeg',
  '/Images/08_Photography/BC85F44E-8827-48DA-B3AD-E61D7FA2DDD0_1_105_c.jpeg',
  '/Images/08_Photography/BDD88967-0A7B-4ABA-8E93-0594AD675EA3_1_105_c.jpeg',
  '/Images/08_Photography/BFB87126-1902-49C1-9C92-545A85895854_1_105_c.jpeg',
  '/Images/08_Photography/C1D40CFB-FC0F-4F75-A346-2B096F55E4AB_1_105_c.jpeg',
  '/Images/08_Photography/C2ACA991-840F-400B-9D91-412407E6FE7D_1_105_c.jpeg',
  '/Images/08_Photography/C41C5F17-317C-4642-8BB9-414C3305F464_1_105_c.jpeg',
  '/Images/08_Photography/C67BBD51-BB69-4BC6-A0DE-783559A3641C_1_105_c.jpeg',
  '/Images/08_Photography/C98E1B7C-0BF4-48BA-AC75-9FB4905E4002_1_105_c.jpeg',
  '/Images/08_Photography/CB9AB94B-D209-4DB4-8D6C-0CBC9D72B0F3_1_105_c.jpeg',
  '/Images/08_Photography/CC1D2BFD-44A6-4A0E-9E04-3DBE3DAD900E_1_105_c.jpeg',
  '/Images/08_Photography/CEAEE7E0-B1A0-4602-B908-71E0E67CBCB4_1_105_c.jpeg',
  '/Images/08_Photography/D5EBD829-A58F-4FAD-8AEB-34C9ED39BDE7_1_105_c.jpeg',
  '/Images/08_Photography/D629B1CF-9811-46A8-827E-247CAF22153E_1_105_c.jpeg',
  '/Images/08_Photography/D62CFD05-F14E-493E-91E4-98EC451F7646_1_105_c.jpeg',
  '/Images/08_Photography/D6C3D22E-E92E-4E9B-8501-D3F56E7A6A2D_1_105_c.jpeg',
  '/Images/08_Photography/D8BF896D-A1E0-428A-B28B-4BABC0DC36E3_1_105_c.jpeg',
  '/Images/08_Photography/DBA31A3E-2C46-44DA-AE2A-CA70A007B2ED_1_105_c.jpeg',
  '/Images/08_Photography/E08D596D-ABC8-4B8B-89A6-27C0ED826DDB_4_5005_c.jpeg',
  '/Images/08_Photography/E1453CB1-DA10-4036-8BFD-17D56AFDF7E8_1_105_c.jpeg',
  '/Images/08_Photography/E229212E-24FB-433C-A2EC-76A38C699C70_1_105_c.jpeg',
  '/Images/08_Photography/E2AE6724-D6D2-4BD8-A062-37ABA0A92F13_1_105_c.jpeg',
  '/Images/08_Photography/E2F263B8-117E-4CC2-8F70-DCCE34A986D5_1_105_c.jpeg',
  '/Images/08_Photography/E32C2A50-344D-4C28-9C18-70181863DCBB_1_105_c.jpeg',
  '/Images/08_Photography/E3DD9FF2-1616-48CD-9AE0-9AE58C9DBD1A_1_105_c.jpeg',
  '/Images/08_Photography/E4FBA557-01C0-4FEE-A236-E9D8A0C02A6D_1_105_c.jpeg',
  '/Images/08_Photography/E574BFE2-059C-4914-9B6B-A16C73DD6D9A_1_105_c.jpeg',
  '/Images/08_Photography/E9F71DDB-9F8B-4DDB-9A16-05F262F8D0AC_1_105_c.jpeg',
  '/Images/08_Photography/EA6B0E06-21EE-4585-B9D3-867BD08E12A7_1_105_c.jpeg',
  '/Images/08_Photography/EFEFEC8D-517D-4B55-A310-DAFDD386A2A0_1_105_c.jpeg',
  '/Images/08_Photography/F0796A24-D3A7-4F9F-9DA2-452563B46F62_1_105_c.jpeg',
  '/Images/08_Photography/F408DF07-2848-4C7B-BE9C-14401E7062E0_1_105_c.jpeg',
  '/Images/08_Photography/FB2D6F7C-9AC1-4ADB-BD44-8D2182A536F2_1_105_c.jpeg',
  '/Images/08_Photography/FCF754F9-7B43-418C-A856-4899A741B493_1_105_c.jpeg',
  '/Images/08_Photography/FD3EDEAF-D306-4FD9-AB56-E10518EA815F_1_105_c.jpeg',
  '/Images/08_Photography/FD4DA6DD-B378-4413-AC67-CAE0269B7C0B_1_105_c.jpeg',
  '/Images/08_Photography/FEFF32E1-5302-447D-BACF-399A8F86BF49_1_105_c.jpeg',
];

export default function Photography() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const touchStartX = useRef(null);

  const prev = () => setSelectedIndex((i) => (i - 1 + photos.length) % photos.length);
  const next = () => setSelectedIndex((i) => (i + 1) % photos.length);

  useEffect(() => {
    if (selectedIndex === null) return;
    const onKey = (e) => {
      if (e.key === 'Escape') setSelectedIndex(null);
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [selectedIndex]);

  const onTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (delta < -50) next();
    else if (delta > 50) prev();
    touchStartX.current = null;
  };

  return (
    <main className="gradient-background pt-5 mt-5" style={{ minHeight: '100vh' }}>
      <div className="container py-5 px-4">
        <div className="featurette-card mb-5">
          <div className="text-center mb-5">
            <h1 className="display-4 fw-bold text-dark" style={{ letterSpacing: '-1px' }}>
              Recording through the lens
            </h1>
            <p className="text-muted mt-2">Photography · Architecture & Landscapes</p>
          </div>

          <div className="photo-grid">
            {photos.map((path, i) => (
              <img
                key={i}
                src={imgUrl(path)}
                alt={`Photography ${i + 1}`}
                onClick={() => setSelectedIndex(i)}
                style={{ cursor: 'zoom-in' }}
              />
            ))}
          </div>
        </div>
      </div>

      {selectedIndex !== null && (
        <div
          onClick={() => setSelectedIndex(null)}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          style={{
            position: 'fixed', inset: 0, zIndex: 9999,
            background: 'rgba(0,0,0,0.88)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'zoom-out',
          }}
        >
          <img
            src={imgUrl(photos[selectedIndex])}
            alt="Enlarged photo"
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: '80vw', maxHeight: '90vh',
              objectFit: 'contain', borderRadius: '8px',
              boxShadow: '0 8px 40px rgba(0,0,0,0.6)',
            }}
          />

          <button onClick={(e) => { e.stopPropagation(); prev(); }} style={navBtnStyle('left')}>‹</button>
          <button onClick={(e) => { e.stopPropagation(); next(); }} style={navBtnStyle('right')}>›</button>

          <button
            onClick={() => setSelectedIndex(null)}
            style={{
              position: 'absolute', top: 16, right: 24,
              background: 'none', border: 'none',
              color: '#fff', fontSize: '2.5rem',
              cursor: 'pointer', lineHeight: 1, opacity: 0.8,
            }}
          >
            ×
          </button>
        </div>
      )}
    </main>
  );
}

function navBtnStyle(side) {
  return {
    position: 'absolute', top: '50%', transform: 'translateY(-50%)',
    [side]: 16,
    background: 'rgba(255,255,255,0.15)', border: 'none',
    color: '#fff', fontSize: '3rem', lineHeight: 1,
    width: 56, height: 56, borderRadius: '50%',
    cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
  };
}
