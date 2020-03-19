import { ColumnApi, GridApi, GridReadyEvent } from 'ag-grid-community';
import getGridContext from './getGridContext';

class APIManager {
  private _gridAPIs: { [x: string]: GridApi } = {};
  private _columnAPIs: { [x: string]: ColumnApi } = {};

  /**
   * Property that indicates the APIs for the registered
   * grid have been initialized
   */
  ready(gridID: string) {
    return !!this._gridAPIs[gridID] && !!this._columnAPIs[gridID];
  }

  /**
   * Registers a grid with the APIManager
   * @param gre the GridReadyEvent
   * @param gridID the grid ID
   */
  registerGrid(gre: GridReadyEvent) {
    const gridContext = getGridContext(gre.api);
    if (gridContext) {
      const { gridID } = gridContext;
      this._gridAPIs[gridID] = gre.api;
      this._columnAPIs[gridID] = gre.columnApi;
    }
  }

  /**
   * Un-registers a grid from the APIManager
   * @param gridID the grid ID
   */
  unregisterGrid(gridID: string) {
    if (this._gridAPIs[gridID]) {
      delete this._gridAPIs[gridID];
    }
    if (this._columnAPIs[gridID]) {
      delete this._columnAPIs[gridID];
    }
  }

  /**
   * Returns the gridApi for a registered grid
   * @param gridID the grid ID
   */
  getGridApi(gridID: string) {
    return this._gridAPIs[gridID];
  }

  /**
   * Returns the columnApi for a registered grid
   * @param gridID the grid ID
   */
  getColumnApi(gridID: string) {
    return this._columnAPIs[gridID];
  }
}

const apiManager = new APIManager();
export default apiManager;
