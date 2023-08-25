package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseLoader implements CommandLineRunner{
    
    private final ProductoRepository repositoryP;

	private final VentaRepository repositoryV;

	private final VentaDetalleRepository repositoryVD;

    @Autowired
	public DatabaseLoader(ProductoRepository repositoryP, VentaRepository repositoryV,VentaDetalleRepository repositoryVD){
		this.repositoryP = repositoryP;
		this.repositoryV = repositoryV;
		this.repositoryVD = repositoryVD;

	}

    @Override
    public void run(String... Strings) throws Exception{

        this.repositoryP.save(new Producto("lejia", 6.99f));
        this.repositoryP.save(new Producto("Arroz", 4.00f));
        this.repositoryP.save(new Producto("Keke", 2.99f));

      

        Venta venta = new Venta();
        venta.setTotal(13.98f);
        this.repositoryV.save(venta);


        Producto pro = new Producto("lentejas",2.50f);
		this.repositoryP.save(pro);


        this.repositoryVD.save(new VentaDetalle(venta, pro, 2));

    }


}
