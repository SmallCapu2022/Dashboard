import { Component } from '@angular/core';
import { TopThreeProductsComponent } from "../top-three-products/top-three-products.component";
import { SalesPerMonthComponent } from "../sales-per-month/sales-per-month.component";
import { SalesByCategoryComponent } from "../sales-by-category/sales-by-category.component";
import { LastFewTransactionsComponent } from "../last-few-transactions/last-few-transactions.component";
import { TopWidgetsComponent } from "../top-widgets/top-widgets.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [TopThreeProductsComponent, SalesPerMonthComponent, SalesByCategoryComponent, LastFewTransactionsComponent, TopWidgetsComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
