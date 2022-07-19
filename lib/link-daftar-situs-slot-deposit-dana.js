'use babel';

import LinkDaftarSitusSlotDepositDanaView from './link-daftar-situs-slot-deposit-dana-view';
import { CompositeDisposable } from 'atom';

export default {

  linkDaftarSitusSlotDepositDanaView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.linkDaftarSitusSlotDepositDanaView = new LinkDaftarSitusSlotDepositDanaView(state.linkDaftarSitusSlotDepositDanaViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.linkDaftarSitusSlotDepositDanaView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'link-daftar-situs-slot-deposit-dana:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.linkDaftarSitusSlotDepositDanaView.destroy();
  },

  serialize() {
    return {
      linkDaftarSitusSlotDepositDanaViewState: this.linkDaftarSitusSlotDepositDanaView.serialize()
    };
  },

  toggle() {
    console.log('LinkDaftarSitusSlotDepositDana was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
